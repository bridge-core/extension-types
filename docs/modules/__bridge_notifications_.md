[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/notifications%22

# Namespace: "@bridge/notifications"

Module that allows extensions to create notifications.

## Functions

### create

▸ **create**(`config`): `any`

Create a new notification.

**`example`**
const { create } = await require('@bridge/notification')

create(
	icon: 'mdi-apple',
	message: 'Hello World!',
	color: 'blue'
	textColor: 'white',
	disposeOnMiddleClick: true,

	() => {
		// Do something...
	},
	() => {
		// Do something...
	}
)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`INotificationConfig`](../interfaces/inotificationconfig.md) |

#### Returns

`any`

#### Defined in

index.d.ts:333

___

### createError

▸ **createError**(`error`): [`IDisposable`](../interfaces/idisposable.md)

Create a new error notification.

**`example`**
const { createError } = await require('@bridge/notification')

createError(new Error(`Oops, something went wrong :(`))

try {
	const t = 0
	t = 2 //Throws error
} catch (error) {
	createError(error)
}

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

[`IDisposable`](../interfaces/idisposable.md)

#### Defined in

index.d.ts:349
