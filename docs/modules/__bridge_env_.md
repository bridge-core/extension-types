[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/env%22

# Namespace: "@bridge/env"

Utility module that provides access to environmental project data.

## Variables

### APP\_VERSION

• `Const` **APP\_VERSION**: `string`

Gets the current version for bridge.

#### Defined in

index.d.ts:54

## Functions

### getCurrentBP

▸ **getCurrentBP**(): `string`

Returns the path to the current behavior pack.

#### Returns

`string`

#### Defined in

index.d.ts:58

___

### getCurrentProject

▸ **getCurrentProject**(): `string`

Returns the path to the current project.

#### Returns

`string`

#### Defined in

index.d.ts:66

___

### getCurrentRP

▸ **getCurrentRP**(): `string`

Returns the path to the current resource pack.

#### Returns

`string`

#### Defined in

index.d.ts:62

___

### getProjectAuthor

▸ **getProjectAuthor**(): `Promise`<`string` \| `undefined`\>

Returns the author of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

index.d.ts:78

___

### getProjectPrefix

▸ **getProjectPrefix**(): `Promise`<`string` \| `undefined`\>

Returns the prefix/namespace of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

index.d.ts:74

___

### getProjectTargetVersion

▸ **getProjectTargetVersion**(): `Promise`<`string` \| `undefined`\>

Returns the target minecraft version of the current project.

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

index.d.ts:70
