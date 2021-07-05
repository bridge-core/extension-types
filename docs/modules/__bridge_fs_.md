[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/fs%22

# Namespace: "@bridge/fs"

Module that allows extensions to interact with the user's file system.

## Functions

### copyFile

▸ **copyFile**(`originPath`, `destPath`): `Promise`<`FileSystemFileHandle`\>

Copy a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `originPath` | `string` |
| `destPath` | `string` |

#### Returns

`Promise`<`FileSystemFileHandle`\>

#### Defined in

index.d.ts:221

___

### copyFileHandle

▸ **copyFileHandle**(`originHandle`, `destHandle`): `Promise`<`FileSystemFileHandle`\>

Copy a file handle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `originHandle` | `FileSystemFileHandle` |
| `destHandle` | `FileSystemFileHandle` |

#### Returns

`Promise`<`FileSystemFileHandle`\>

#### Defined in

index.d.ts:227

___

### copyFolder

▸ **copyFolder**(`originPath`, `destPath`): `Promise`<`void`\>

Copy a folder by their paths.

#### Parameters

| Name | Type |
| :------ | :------ |
| `originPath` | `string` |
| `destPath` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

index.d.ts:236

___

### copyFolderByHandle

▸ **copyFolderByHandle**(`originHandle`, `destHandle`): `Promise`<`void`\>

Copy a folder by its FileSystemDirectoryHandle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `originHandle` | `FileSystemDirectoryHandle` |
| `destHandle` | `FileSystemDirectoryHandle` |

#### Returns

`Promise`<`void`\>

#### Defined in

index.d.ts:242

___

### directoryExists

▸ **directoryExists**(`path`): `Promise`<`boolean`\>

Return whether a directory exists or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

index.d.ts:263

___

### fileExists

▸ **fileExists**(`path`): `Promise`<`boolean`\>

Return whether a file exists or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

index.d.ts:257

___

### getDirectoryHandle

▸ **getDirectoryHandle**(`path`, `__namedParameters`): `Promise`<`FileSystemDirectoryHandle`\>

The getDirectoryHandle() method returns a FileSystemDirectoryHandle for a subdirectory with the specified name within the directory handle on which the method is called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | A USVString representing the FileSystemHandle.name of the subdirectory you wish to retrieve. |
| `__namedParameters` | `Partial`<[`IGetHandleConfig`](../interfaces/igethandleconfig.md)\> | - |

#### Returns

`Promise`<`FileSystemDirectoryHandle`\>

#### Defined in

index.d.ts:136

___

### getFileHandle

▸ **getFileHandle**(`path`, `create`): `Promise`<`FileSystemFileHandle`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `create` | `boolean` |

#### Returns

`Promise`<`FileSystemFileHandle`\>

#### Defined in

index.d.ts:140

___

### loadFileHandleAsDataUrl

▸ **loadFileHandleAsDataUrl**(`fileHandle`): `Promise`<`string`\>

Read a file by its FileHandle as a URL.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileHandle` | `FileSystemFileHandle` |

#### Returns

`Promise`<`string`\>

#### Defined in

index.d.ts:251

___

### mkdir

▸ **mkdir**(`path`, `__namedParameters`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `__namedParameters` | `Partial`<[`IMkdirConfig`](../interfaces/imkdirconfig.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

index.d.ts:142

___

### readFile

▸ **readFile**(`path`): `Promise`<`File`\>

Read a file and return it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`File`\>

#### Defined in

index.d.ts:178

___

### readFilesFromDir

▸ **readFilesFromDir**(`path`, `dirHandle`): `Promise`<{ `kind`: `string` ; `name`: `string` ; `path`: `string`  }[]\>

Read the contents of a directory and returns the files.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `dirHandle` | `FileSystemDirectoryHandle` \| `Promise`<`FileSystemDirectoryHandle`\> |

#### Returns

`Promise`<{ `kind`: `string` ; `name`: `string` ; `path`: `string`  }[]\>

#### Defined in

index.d.ts:163

___

### readJSON

▸ **readJSON**(`path`): `Promise`<`FileSystemFileHandle`\>

Read a JSON file at a given path and return the file handle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`FileSystemFileHandle`\>

#### Defined in

index.d.ts:207

___

### readdir

▸ **readdir**(`path`, `config`): `Promise`<`FileSystemHandle`[]\>

Read the contents of a given directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `config` | `Object` |
| `config.withFileTypes` | ``true`` |

#### Returns

`Promise`<`FileSystemHandle`[]\>

#### Defined in

index.d.ts:149

▸ **readdir**(`path`, `config?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `config?` | `Object` |
| `config.withFileTypes?` | ``false`` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

index.d.ts:153

▸ **readdir**(`path`, `__namedParameters`): `Promise`<`FileSystemHandle`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `__namedParameters` | `Object` |
| `__namedParameters.withFileTypes?` | `boolean` |

#### Returns

`Promise`<`FileSystemHandle`[]\>

#### Defined in

index.d.ts:154

___

### setup

▸ **setup**(`baseDirectory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseDirectory` | `FileSystemDirectoryHandle` |

#### Returns

`void`

#### Defined in

index.d.ts:127

___

### unlink

▸ **unlink**(`path`): `Promise`<`void`\>

Unlink a directory from the fileSystem, deleting it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

index.d.ts:184

___

### write

▸ **write**(`fileHandle`, `data`): `Promise`<`FileSystemFileHandle`\>

Write to a file from a FileSystemDirectoryHandle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileHandle` | `FileSystemFileHandle` |
| `data` | `FileSystemWriteChunkType` |

#### Returns

`Promise`<`FileSystemFileHandle`\>

#### Defined in

index.d.ts:198

___

### writeFile

▸ **writeFile**(`path`, `data`): `Promise`<`FileSystemFileHandle`\>

Write to a file at the specified path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `FileSystemWriteChunkType` |

#### Returns

`Promise`<`FileSystemFileHandle`\>

#### Defined in

index.d.ts:191

___

### writeJSON

▸ **writeJSON**(`path`, `data`, `beautify`): `Promise`<`FileSystemFileHandle`\>

Write a javascript object as JSON to a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `data` | `any` |
| `beautify` | `boolean` |

#### Returns

`Promise`<`FileSystemFileHandle`\>

#### Defined in

index.d.ts:214
