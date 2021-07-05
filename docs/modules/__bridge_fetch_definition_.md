[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/fetch-definition%22

# Namespace: "@bridge/fetch-definition"

Grants access to the lightning cache database.

## Functions

### fetchDefinition

▸ **fetchDefinition**(`fileType`, `fetchDefs`, `fetchSearch`, `fetchAll?`): `Promise`<`string`[]\>

Search through the definitions `fetchDefs` in `fileType` files for `fetchSearch`.

**`example`**
const { fetchDefinition } = await require('@bridge/fetch-definition')

const walkAnimations = await fetchDefinition(
	'animation',
	['ids'],
	'animation.walk',
	false
)

// With fetchAll=false you still get a string[] even though it only has one entry
// => Consistency
const walkAnimation = walkAnimations[0]

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileType` | `string` |
| `fetchDefs` | `string`[] |
| `fetchSearch` | `string` |
| `fetchAll?` | `boolean` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

index.d.ts:106
