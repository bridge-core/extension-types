/**
 * Module that provides programmatic access to [Vue](https://vuejs.org/) components defined inside of the plugin's `ui/` folder.
 */
declare module '@bridge/ui' {
    /**
     * @example
     * 
     * //Accesses the component inside of the ui/Main.vue file
     * const { Main } = await require('@bridge/ui')
     * 
     * 
     * //Accesses the component inside of the ui/Nested/Main.vue file
     * const {
     * 	Nested: { Main: Main2 },
     * } = await require('@bridge/ui')
     * 
     */
    export const UI: any

    export const BuiltIn: BuiltIn
}

declare interface BuiltIn {
    /**
     * A helper for quickly creating windows.
     * @example
     * <template>
     * 	<BaseWindow
     * 		v-if="shouldRender"
     * 		:windowTitle="windowTitle"
     * 		:isVisible="isVisible"
     * 		:hasMaximizeButton="false"
     * 		:isFullscreen="false"
     * 		:width="440"
     * 		:height="120"
     * 		v-on:closeWindow="onClose"
     * 	>
     * 		<template #toolbar>
     * 			[TOOLBAR CONTENT]
     * 		</template>
     * 		<template #default>
     * 			[MAIN CONTENT]
     * 		</template>
     * 		<template #actions>
     * 			[ACTION CONTENT]
     * 		</template>
     * 	</BaseWindow>
     * </template>
     * 
     * <script>
     * 	const { BuiltIn } = await require('@bridge/ui')
     * 
     * 	export default {
     * 		name: 'Information',
     * 		components: {
     * 			BaseWindow: BuiltIn.BaseWindow,
     * 		},
     * 		props: ['currentWindow'],
     * 		data() {
     * 			return this.currentWindow.getState()
     * 		},
     * 		methods: {
     * 			onClose() {
     * 				this.currentWindow.close()
     * 			},
     * 		},
     * 	}
     * </script>
     */
    BaseWindow: any
    /**
     * A helper for quickly creating sidebar windows.
     * @example
     * <template>
     * 	<SidebarWindow
     * 		v-if="shouldRender"
     * 		:windowTitle="windowTitle"
     * 		:isVisible="isVisible"
     * 		:hasMaximizeButton="false"
     * 		:isFullscreen="false"
     * 		:width="440"
     * 		:height="120"
     * 		v-on:closeWindow="onClose"
     *  >
     * 		<template #toolbar>
     * 			[TOOLBAR CONTENT]
     * 		</template>
     * 		<template #sidebar>
     * 			[SIDEBAR CONTENT]
     * 		</template>
     * 		<template #default>
     * 			[MAIN CONTENT]
     * 		</template>
     * 		<template #actions>
     * 			[ACTION CONTENT]
     * 		</template>
     * 	</SidebarWindow>
     * </template>
     * 
     * <script>
     * 	const { BuiltIn } = await require('@bridge/ui')
     * 
     * 	export default {
     * 		name: 'Information',
     * 		components: {
     * 			SidebarWindow: BuiltIn.SidebarWindow,
     * 		},
     * 		props: ['currentWindow'],
     * 		data() {
     * 			return this.currentWindow.getState()
     * 		},
     * 		methods: {
     * 			onClose() {
     * 				this.currentWindow.close()
     * 			},
     * 		},
     * 	}
     * </script>
     */
    SidebarWindow: any
}