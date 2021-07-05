[extension-types](../README.md) / [Exports](../modules.md) / %22@bridge/ui%22

# Namespace: "@bridge/ui"

Module that provides programmatic access to [Vue](https://vuejs.org/) components defined inside of the plugin's `ui/` folder.

## Variables

### BuiltIn

• `Const` **BuiltIn**: [`BuiltIn`](../interfaces/builtin.md)

#### Defined in

index.d.ts:575

___

### UI

• `Const` **UI**: `any`

**`example`**

//Accesses the component inside of the ui/Main.vue file
const { Main } = await require('@bridge/ui')

//Accesses the component inside of the ui/Nested/Main.vue file
const {
	Nested: { Main: Main2 },
} = await require('@bridge/ui')

#### Defined in

index.d.ts:573
