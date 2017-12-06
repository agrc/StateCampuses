#!/usr/bin/env python
# * coding: utf8 *
'''
state-campus

Usage:
  state-campus merge-from (<input>) to (<output>)
  state-campus list-folders (<input>)
  state-campus create-map (<input>) to (<output>)
  state-campus -h | --help
'''
import json
import sys
from os.path import basename, dirname, exists, isdir, join

import arcpy
import glob2
from docopt import docopt


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

        prefix = basename(dirname(gdb_path)).replace(' ', '')

        feature_classes = arcpy.ListFeatureClasses()

        datasets = arcpy.ListDatasets()
        for dataset in datasets:
            feature_classes.extend(arcpy.ListFeatureClasses(feature_dataset=dataset))

        print('')
        print('reprojecting {}'.format(len(feature_classes)))

        for data in feature_classes:
            new_data = join(output_folder, '{}_{}'.format(prefix, data))

            arcpy.management.Project(data, new_data, web_mercator)

            sys.stdout.write('.')
            sys.stdout.flush()

        arcpy.ClearEnvironment('workspace')


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
        mapping[facility]['layers'].append([name, description.shapeType])
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


if __name__ == '__main__':
    args = docopt(__doc__)

    if args['merge-from']:
        merge_geodatabases(args['<input>'], args['<output>'])

    if args['create-map']:
        create_facility_map(args['<input>'], args['<output>'])

    if args['list-folders']:
        folders = get_fgdbs_in_folder(args['<input>'])

        print([basename(folder) for folder in folders])
