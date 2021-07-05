[extension-types](../README.md) / [Exports](../modules.md) / ITabActionConfig

# Interface: ITabActionConfig

## Properties

### icon

• **icon**: `string`

#### Defined in

index.d.ts:489

___

### isDisabled

• `Optional` **isDisabled**: (`tab`: `any`) => `boolean`

#### Type declaration

▸ (`tab`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

##### Returns

`boolean`

#### Defined in

index.d.ts:493

___

### name

• **name**: `string`

#### Defined in

index.d.ts:490

## Methods

### isFor

▸ **isFor**(`tab`): `boolean` \| `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

#### Returns

`boolean` \| `Promise`<`boolean`\>

#### Defined in

index.d.ts:492

___

### trigger

▸ **trigger**(`tab`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | `any` |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

index.d.ts:491
