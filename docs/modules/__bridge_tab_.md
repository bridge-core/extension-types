[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/tab%22

# Namespace: "@bridge/tab"

Module that allows access to bridge.'s tab system.

## Variables

### ContentTab

• `Const` **ContentTab**: `any`

**`link`** https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/CommonTab.ts

#### Defined in

index.d.ts:509

___

### FileTab

• `Const` **FileTab**: `any`

**`link`** https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/FileTab.ts

#### Defined in

index.d.ts:513

## Functions

### openFilePath

▸ **openFilePath**(`filePath`, `selectTab`): `Promise`<`void`\>

Given a file path relative to the project root, open the corresponding file inside of bridge.'s tab system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | File to open |
| `selectTab` | `boolean` | Whether to automatically select the tab |

#### Returns

`Promise`<`void`\>

#### Defined in

index.d.ts:532

___

### openTab

▸ **openTab**(`FileTabClass`, `splitScreen`): `Promise`<`any`\>

Useful for ContentTabs: Programmatically add the tab to the tab system

#### Parameters

| Name | Type |
| :------ | :------ |
| `FileTabClass` | `any` |
| `splitScreen` | `boolean` |

#### Returns

`Promise`<`any`\>

#### Defined in

index.d.ts:525

___

### register

▸ **register**(`FileTabClass`): [`IDisposable`](../interfaces/idisposable.md)

Register new FileTabs to be picked up by the isTabFor tab system method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FileTabClass` | `any` | FileTab class |

#### Returns

[`IDisposable`](../interfaces/idisposable.md)

#### Defined in

index.d.ts:519
