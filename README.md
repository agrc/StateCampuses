# state-campuses

### Scripting

The state campus data comes as a collection of geodatabases. To work with dynamic workspaces, they need to be merged into one geodatabase. This is our opportunity to reproject into web mercator as well.

From the arcgis pro environment,

`python state-campus.py merge-from <parent-state-campus-gdb-folder> to <statecampus.gdb>`

This command will read all of the gdb files and reproject them into the output gdb.

_If there are duplicate file names, they will need to be renamed. This should be the only cause for error when running this command._

To create the drop down list of facilities run the following command,

`python stater-campus.py list-folders <parent-status-campus-folder>`

This array can be copy pasted to the `config.js` `facilities` property.

To create the mapping that is necessary to drive the drop down list, the extent zooming and layers related to each facility, run the following command,

`python state-campus.py create-map <the-merged-gdb-location> to <project-_src-map.json>`
