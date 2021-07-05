[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/sidebar%22

# Namespace: "@bridge/sidebar"

Module that allows extensions to create sidebar tabs.

## Functions

### create

▸ **create**(`config`): [`SidebarElement`](../interfaces/sidebarelement.md)

Creates a new sidebar and adds it to the current workspace.

**`example`**
const { create } = await require('@bridge/sidebar')
const { MyComponent } = await require('@bridge/ui')

create({
	id: 'myExtension',
	displayName: 'Click Me',
	icon: 'mdi-apple',
	component: MyComponent
})

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ISidebarConfig`](../interfaces/isidebarconfig.md) |

#### Returns

[`SidebarElement`](../interfaces/sidebarelement.md)

#### Defined in

index.d.ts:425
