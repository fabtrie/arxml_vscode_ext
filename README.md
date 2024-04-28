# ARXML language server

This is an extension for Visual Studio Code that provides language support for arxml files

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

## XML features

This extension does not provide any normal XML features as they can be obtained using [redhat.vscode-xml](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml).

This will give features like code completion and others (check extension webside).

To achive this, a xml file must be created with the following content:

```
<catalog xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
    <uri
        name="http://autosar.org/schema/r4.0"
        uri="file:///<your_path>/AUTOSAR_00052.xsd"
    />
</catalog>
```

The latest xsd can be found here: [AUTOSAR_FO_MMOD_XMLSchema.zip](https://www.autosar.org/fileadmin/standards/R23-11/FO/AUTOSAR_FO_MMOD_XMLSchema.zip)

In vscode settings you need to add the path to the created xml:

```
"xml.catalogs": [
    "<your_path>/catalog.xml"
],
"xml.symbols.excluded": [
    "**/*.arxml"
],
"files.associations": {
    "*.arxml": "xml"
}
```

`xml.symbols.excluded` will make sure, that the xml extension does not interfere with this one.

Detailed information on the XSD settings can be found here: https://github.com/redhat-developer/vscode-xml/blob/main/docs/Validation.md#xml-catalog-with-xsd

## Known Issues

- linux support missing
- better documentation needed
