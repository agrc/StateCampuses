#!/usr/bin/env python
# * coding: utf8 *
'''
state-campus

Usage:
  state_campus merge-from <input> to <output>
  state_campus list-folders <input>
  state_campus create-map <input> to <output>
  state_campus -h | --help
'''
import json
import sys
from os.path import basename, dirname, exists, isdir, join
from time import clock

import glob2
from docopt import docopt

import arcpy


def merge_geodatabases(input_folder, output_folder):
    if not isdir(input_folder) or not exists(input_folder):
        raise Exception('{} is not a valid location. exiting'.format(input_folder))

    directory = dirname(output_folder)
    gdb_name = basename(output_folder).split('.')[0]

    web_mercator = arcpy.SpatialReference(3857)

    #: create gdb if needed
    if exists(output_folder):
        print('{} exists, deleting'.format(output_folder))

        arcpy.management.Delete(output_folder)

    arcpy.management.CreateFileGDB(directory, gdb_name, 'CURRENT')

    create_empty_feature_class(output_folder, web_mercator)

    gdb_paths = get_fgdbs_in_folder(input_folder)
    print('{} gdbs found'.format(len(gdb_paths)))

    for gdb_path in gdb_paths:
        arcpy.env.workspace = gdb_path
        domains = arcpy.da.ListDomains()

        prefix = basename(dirname(gdb_path)).replace(' ', '')

        feature_classes = arcpy.ListFeatureClasses()

        datasets = arcpy.ListDatasets()
        for dataset in datasets:
            feature_classes.extend(arcpy.ListFeatureClasses(feature_dataset=dataset))

        print('\nETL\'ing {} feature classes'.format(len(feature_classes)))
        start_etl = clock()
        for data in feature_classes:
            new_data = join(output_folder, '{}_{}'.format(prefix, data))

            description = arcpy.Describe(data)

            arcpy.management.Project(data, new_data, web_mercator)
            arcpy.AlterAliasName(new_data, description.aliasName)

            fields = arcpy.ListFields(data)

            replace_codes_with_values(new_data, fields, domains)

            sys.stdout.write('.')
            sys.stdout.flush()

        arcpy.ClearEnvironment('workspace')
        print('\n{}'.format(format_time(clock() - start_etl)))


def create_facility_map(input_gdb, output_file):
    if not isdir(input_gdb) or not exists(input_gdb):
        raise Exception('{} is not a valid file geodatabase. exiting'.format(input_gdb))

    arcpy.env.workspace = input_gdb
    layers = arcpy.ListFeatureClasses()

    layer_descriptions = (arcpy.Describe(layer) for layer in layers)

    mapping = {}
    for description in layer_descriptions:
        if description.name == 'empty':
            continue

        facility, name = description.name.split('_', 1)
        extent = json.loads(description.extent.JSON)

        mapping.setdefault(facility, {})
        mapping[facility].setdefault('layers', [])
        mapping[facility]['layers'].append(['{}:{}'.format(name, description.aliasName), description.shapeType])
        mapping[facility].setdefault('extent', extent)

        if mapping[facility]['extent']['ymax'] < extent['ymax']:
            mapping[facility]['extent']['ymax'] = extent['ymax']

        if mapping[facility]['extent']['ymin'] > extent['ymin']:
            mapping[facility]['extent']['ymin'] = extent['ymin']

        if mapping[facility]['extent']['xmax'] < extent['xmax']:
            mapping[facility]['extent']['xmax'] = extent['xmax']

        if mapping[facility]['extent']['xmin'] > extent['xmin']:
            mapping[facility]['extent']['xmin'] = extent['xmin']

        sys.stdout.write('.')
        sys.stdout.flush()

    with open(output_file, 'w') as f:
        f.write(json.dumps(mapping))


def get_fgdbs_in_folder(folder):
    glob_path = folder + '/**/*.gdb'

    return glob2.glob(glob_path)


def create_empty_feature_class(workspace, sr):
    arcpy.management.CreateFeatureclass(workspace, 'empty', 'POINT', spatial_reference=sr)


def replace_codes_with_values(feature_class, field_info, domain_info):
    field_domain_map = [(field, field.domain) for field in field_info if field.domain]
    fields = [field[0] for field in field_domain_map]
    field_names = [field.name for field in fields]
    domain_names = [domain[1] for domain in field_domain_map]

    if len(domain_names) == 0:
        return

    domain_lookup = {}
    for name in domain_names:
        domain_lookup[name] = [domain for domain in domain_info if domain.name == name][0]

    [arcpy.management.AddField(feature_class, '{}_Value'.format(field.name), 'TEXT', field_alias=field.aliasName) for field in fields]

    def swap_code_for_value(code, domain_name):
        domain = domain_lookup[domain_name].codedValues
        if not domain:
            return code

        if code not in domain:
            return code

        return domain[code]

    combined_fields = field_names + ['{}_Value'.format(field) for field in field_names]

    with arcpy.da.UpdateCursor(feature_class, combined_fields) as cursor:
        for row in cursor:
            values_row = [swap_code_for_value(code, domain_names[i]) for i, code in enumerate(row) if i < len(field_names)]
            row = row[:len(field_names)] + values_row

            cursor.updateRow(row)

    try:
        arcpy.management.DeleteField(feature_class, field_names)
    except:
        print('could not delete {} from {}'.format(', '.join(field_names), feature_class))


def format_time(seconds):
    minute = 60.00
    hour = 60.00 * minute

    if seconds < 30:
        return '{} ms'.format(int(seconds * 1000))

    if seconds < 90:
        return '{} seconds'.format(round(seconds, 2))

    if seconds < 90 * minute:
        return '{} minutes'.format(round(seconds / minute, 2))

    return '{} hours'.format(round(seconds / hour, 2))


if __name__ == '__main__':
    args = docopt(__doc__)

    start_seconds = clock()
    if args['merge-from']:
        merge_geodatabases(args['<input>'], args['<output>'])

    if args['create-map']:
        create_facility_map(args['<input>'], args['<output>'])

    if args['list-folders']:
        folders = get_fgdbs_in_folder(args['<input>'])

        print([basename(folder) for folder in folders])

    print('\n{}'.format(format_time(clock() - start_seconds)))
