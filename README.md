# ARXML language server

This is an extention for Visual Studio Code that provides language support for arxml files

## Features

- **go to definition**: jump to container referenced by a REF element
- **show references**: show and navigate to all references of a identifyable container (containing a SHORT-NAME tag)
- **hover**: On mouse hover, info of the identifyable container is shown
- **outline**: show a detailed outline
- **bread crumbs**: show bread crumbs on the top of the file which allows navigation to parents of the current element
- **workspace symbols**: quick seach using Ctrl+T whithin all symbols of the whole project

## Requirements

Currently, works only on windows.

## Extension Settings

This extension contributes the following settings:

- `arxmlLanguageServer.ignorePattern`: Allows to define regex pattern with which files can be excluded from indexing. However, this works only for files in a workspace folder. Open files will always be indexed (index will be removed if file is closed)

## Known Issues

- linux support missing
- better documentation needed
- explain configuration of XML plugin to get support for AUTOSAR schema
