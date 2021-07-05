[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/tab-actions%22

# Namespace: "@bridge/tab-actions"

## Functions

### addTabActions

▸ **addTabActions**(`tab`): `Promise`<`void`\>

Add the default tab actions for the specific file tab.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

index.d.ts:471

___

### register

▸ **register**(`definition`): `Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Register a new tab action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ITabActionConfig`](../interfaces/itabactionconfig.md) |

#### Returns

`Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Disposable

#### Defined in

index.d.ts:478

___

### registerPreview

▸ **registerPreview**(`definition`): `Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Register a new tab preview

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`ITabPreviewConfig`](../interfaces/itabpreviewconfig.md) |

#### Returns

`Promise`<[`IDisposable`](../interfaces/idisposable.md)\>

Disposable

#### Defined in

index.d.ts:485
