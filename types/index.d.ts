/// <reference types="wicg-file-system-access" />

/**
 * Module that allows access to the com.mojang folder.
 */
 declare module '@bridge/com-mojang' {
    /**
     * States whether com.mojang has been setup by the user.
     */
    export const setup: Signal<void>
    /**
     * Returns the com.mojang FileSystem instance.
     */
    export function requestFileSystem(): Promise<any>
}

/**
 * @link https://github.com/bridge-core/editor/blob/main/src/components/Common/Event/Signal.ts
 */
declare interface Signal<T> {}

declare module '@bridge/compare-versions' {
    /**
   * Compare [semver](https://semver.org/) version strings using the specified operator.
   * 
   * @param firstVersion First version to compare
   * @param secondVersion Second version to compare
   * @param operator Allowed arithmetic operator to use
   * @returns `true` if the comparison between the firstVersion and the secondVersion satisfies the operator, `false` otherwise.
   *
   * @example
   * ```js
   * compareVersions.compare('10.1.8', '10.0.4', '>'); // return true
   * compareVersions.compare('10.0.1', '10.0.1', '='); // return true
   * compareVersions.compare('10.1.1', '10.2.2', '<'); // return true
   * compareVersions.compare('10.1.1', '10.2.2', '<='); // return true
   * compareVersions.compare('10.1.1', '10.2.2', '>='); // return false
   * ```
   */
	export function compare(
        firstVersion: string, 
        secondVersion: string, 
        operator: '>' | '>=' | '=' | '<' | '<='
    ): boolean
}

/**
 * Utility module that provides access to environmental project data.
 */
 declare module '@bridge/env' {
    /**
     * Gets the current version for bridge.
     */
    export const APP_VERSION: string
    /** 
     * Returns the path to the current behavior pack.
     */
    export function getCurrentBP(): string
    /**
     * Returns the path to the current resource pack.
     */
    export function getCurrentRP(): string
    /**
     * Returns the path to the current project.
     */
    export function getCurrentProject(): string
    /**
     * Returns the target minecraft version of the current project.
     */
    export function getProjectTargetVersion(): Promise<string | undefined>
    /**
     * Returns the prefix/namespace of the current project.
     */
    export function getProjectPrefix(): Promise<string | undefined>
    /**
     * Returns the author of the current project.
     */
    export function getProjectAuthor(): Promise<string | undefined>
}

/**
 * Grants access to the lightning cache database.
 */
 declare module '@bridge/fetch-definition' {
    /**
     * Search through the definitions `fetchDefs` in `fileType` files for `fetchSearch`.
     * @param fileType 
     * @param fetchDefs 
     * @param fetchSearch 
     * @param fetchAll 
     * 
     * @example
     * ```js
     * const { fetchDefinition } = await require('@bridge/fetch-definition')
     * 
     * const walkAnimations = await fetchDefinition(
     * 	'animation',
     * 	['ids'],
     * 	'animation.walk',
     * 	false
     * )
     * 
     * // With fetchAll=false you still get a string[] even though it only has one entry
     * // => Consistency
     * const walkAnimation = walkAnimations[0]
     * ```
     */
    export function fetchDefinition(
        fileType: string, 
        fetchDefs: string[], 
        fetchSearch: string, 
        fetchAll?: boolean
    ): Promise<string[]>
}

/**
 * Module not yet supported on bridge. v2.
 */
declare module '@bridge/file-importer' {}

/**
 * Module that allows extensions to interact with the user's file system.
 */
declare module '@bridge/fs' {
	/**
	 * 
	 * @param baseDirectory 
	 */
	export function setup(baseDirectory: FileSystemDirectoryHandle): void

	/**
	 * The getDirectoryHandle() method returns a FileSystemDirectoryHandle for a subdirectory with the specified name within the directory handle on which the method is called.
	 * @param path 
	 * A USVString representing the FileSystemHandle.name of the subdirectory you wish to retrieve.
	 * @param options 
	 * An optional object containing options for the retrieved subdirectory.
	 */
	export function getDirectoryHandle(
		path: string,
		{ create, createOnce }: Partial<IGetHandleConfig>
	): Promise<FileSystemDirectoryHandle>
	export function getFileHandle(path: string, create: boolean): Promise<FileSystemFileHandle>

	export function mkdir(path: string, { recursive }: Partial<IMkdirConfig>): Promise<void>

	/**
	 * Read the contents of a given directory.
	 * @param path 
	 * @param config 
	 */
	export function readdir(
		path: string,
		config: { withFileTypes: true }
	): Promise<FileSystemHandle[]>
	export function readdir(path: string, config?: { withFileTypes?: false }): Promise<string[]>
	export function readdir(
		path: string,
		{ withFileTypes }: { withFileTypes?: boolean }
	): Promise<FileSystemHandle[]>
	/**
	 * Read the contents of a directory and returns the files.
	 * @param path 
	 * @param dirHandle 
	 */
	export function readFilesFromDir(
		path: string,
		dirHandle:
			| FileSystemDirectoryHandle
			| Promise<FileSystemDirectoryHandle>
	): Promise<{
        name: string;
        path: string;
        kind: string;
    }[]>

	/**
	 * Read a file and return it.
	 * @param path 
	 */
	export function readFile(path: string): Promise<File>

	/**
	 * Unlink a directory from the fileSystem, deleting it.
	 * @param path 
	 */
	export function unlink(path: string): Promise<void>

	/**
	 * Write to a file at the specified path.
	 * @param path 
	 * @param data 
	 */
	export function writeFile(path: string, data: FileSystemWriteChunkType): Promise<FileSystemFileHandle>

	/**
	 * Write to a file from a FileSystemDirectoryHandle.
	 * @param fileHandle 
	 * @param data 
	 */
	export function write(
		fileHandle: FileSystemFileHandle,
		data: FileSystemWriteChunkType
	): Promise<FileSystemFileHandle>

	/**
	 * Read a JSON file at a given path and return the file handle.
	 * @param path 
	 */
	export function readJSON(path: string): Promise<FileSystemFileHandle>
	/**
	 * Write a javascript object as JSON to a file.
	 * @param path 
	 * @param data 
	 * @param beautify 
	 */
	export function writeJSON(path: string, data: any, beautify: boolean): Promise<FileSystemFileHandle>

	/**
	 * Copy a file.
	 * @param originPath 
	 * @param destPath 
	 */
	export function copyFile(originPath: string, destPath: string): Promise<FileSystemFileHandle>
	/**
	 * Copy a file handle.
	 * @param originHandle 
	 * @param destHandle 
	 */
	export function copyFileHandle(
		originHandle: FileSystemFileHandle,
		destHandle: FileSystemFileHandle
	): Promise<FileSystemFileHandle>
	/**
	 * Copy a folder by their paths.
	 * @param originPath 
	 * @param destPath 
	 */
	export function copyFolder(originPath: string, destPath: string): Promise<void>
	/**
	 * Copy a folder by its FileSystemDirectoryHandle.
	 * @param originHandle 
	 * @param destHandle 
	 */
	export function copyFolderByHandle(
		originHandle: FileSystemDirectoryHandle,
		destHandle: FileSystemDirectoryHandle
	): Promise<void>

	/**
	 * Read a file by its FileHandle as a URL.
	 * @param fileHandle 
	 */
	export function loadFileHandleAsDataUrl(fileHandle: FileSystemFileHandle): Promise<string>

	/**
	 * Return whether a file exists or not.
	 * @param path 
	 */
	export function fileExists(path: string): Promise<boolean>

	/**
	 * Return whether a directory exists or not.
	 * @param path 
	 */
	export function directoryExists(path: string): Promise<boolean>
}

declare interface IGetHandleConfig {
	create: boolean
	createOnce: boolean
}

declare interface IMkdirConfig {
	recursive: boolean
}

/**
 * Utility module that allows custom components, custom commands and other plugins to access shared data inside of a `globals.json` file in the project root.
 */
declare module '@bridge/globals' {}

/**
 * Module that gives access to json parsing wth json5.
 */
 declare module '@bridge/json5' {
    /**
     * Parses a json string to a javascript object.
     * @param str 
     * Json string to parse.
     */
    export function parse(str: string): any
}

/**
 * Module that allows you to modify monaco's behaviors.
 */
 declare module '@bridge/monaco' {
    /**
     * Register a file formatter.
     * @link https://microsoft.github.io/monaco-editor/api/modules/monaco.languages.html#registerdocumentformattingeditprovider
     * @param languageId 
     * @param provider 
     */
    export function registerDocumentFormattingEditProvider (
		languageId: string,
		provider: any
	): void
}

/**
 * Module that allows extensions to create notifications.
 */
 declare module '@bridge/notifications' {
	/**
	 * Create a new notification.
	 * @param config 
	 * @example
     *  ```js
	 * const { create } = await require('@bridge/notification')
	 * 
	 * create(
	 * 	   icon: 'mdi-apple',
	 * 	   message: 'Hello World!',
	 * 	   color: 'blue'
	 * 	   textColor: 'white',
	 * 	   disposeOnMiddleClick: true,
	 * 
	 * 	   () => {
	 * 		   // Do something...
	 * 	   },
	 * 	   () => {
	 * 		   // Do something...
	 * 	   }
	 * )
     * ```
	 */
    export function create(config: INotificationConfig): any
	/**
	 * Create a new error notification.
	 * @param error 
	 * @example
     * ```js
	 * const { createError } = await require('@bridge/notification')
	 * 
	 * createError(new Error(`Oops, something went wrong :(`))
	 * 
	 * try {
	 * 	   const t = 0
	 * 	   t = 2 //Throws error
	 * } catch (error) {
	 * 	   createError(error)
	 * }
     * ```
	 */
    export function createError(error: Error): IDisposable
}

declare interface INotificationConfig {
    icon?: string
	message?: string
	color?: string
	textColor?: string
	disposeOnMiddleClick?: boolean
	isVisible?: boolean

	onClick?: () => void
	onMiddleClick?: () => void
}

declare module '@bridge/path' {
    /**
     * Return the directory name of a path.
     * @param p 
     * The path to evaluate.
     */
    export function dirname(p: string): string
    /**
     * Join all arguments together and normalize the resulting path.
     * @param paths 
     * Paths to join.
     */
    export function join(...paths: string[]): string
    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
     * @param p 
     * The path to evaluate
     */
    export function extname(p: string): string
    /**
     * Return the last portion of a path.
     * @param p 
     * The path to evaluate.
     * @param ext 
     * Optionally, an extension to remove from the result.
     */
    export function basename(p: string, ext?: string | undefined): string
    /**
     * Solve the relative path from {from} to {to}. At times we have two absolute paths, and we need to derive the relative path from one to the other.
     * @param from 
     * @param to 
     */
    export function relative(from: string, to: string): string
}

/**
 * Module that allows extensions to create sidebar tabs.
 */
 declare module '@bridge/sidebar' {
    /**
     * Creates a new sidebar and adds it to the current workspace.
     * @param config.id
     * Id of the sidebar, omit to automatically generate.
     * @param config.displayName
     * Name of the sidebar.
     * @param config.component
     * Vue component that should be rendered for the sidebar.
     * @param config.icon
     * Material design icon to display within the sidebar navegation.
     * 
     * @example
     * ```js
     * const { create } = await require('@bridge/sidebar')
     * const { MyComponent } = await require('@bridge/ui')
     * 
     * create({
     * 	   id: 'myExtension',
     * 	   displayName: 'Click Me',
     * 	   icon: 'mdi-apple',
     * 	   component: MyComponent
     * })
     * ```
     */
    export function create(
        config: ISidebarConfig
    ): SidebarElement
}

declare interface ISidebarConfig {
    /**
     * Id of the sidebar, omit to automatically generate.
     */
    id?: string
    /**
     * Name of the sidebar.
     */
    displayName: string
    /**
     * Vue component that should be rendered for the sidebar.
     */
    component: any
    /**
     * Material design icon to display within the sidebar navegation.
     */
    icon: string
}

declare interface SidebarElement {
    /**
     * @protected
     */
    sidebarUUID: string
	isLoading: boolean
	isVisible: boolean
	isSelected: boolean | null

	get icon(): string | undefined
	get uuid(): string | undefined
	get displayName(): string | undefined
	get component(): any
	dispose(): void
	click(): Promise<void>
}

declare module '@bridge/tab-actions' {
    /**
	 * Add the default tab actions for the specific file tab.
	 * @param tab
	 */
	export function addTabActions(tab: any): Promise<void>

    /**
	 * Register a new tab action.
	 * @param definition
	 * @returns Disposable
	 */
    export function register(definition: ITabActionConfig): Promise<IDisposable>

    /**
	 * Register a new tab preview
	 * @param definition
	 * @returns Disposable
	 */
	export function registerPreview(definition: ITabPreviewConfig): Promise<IDisposable>
}

declare interface ITabActionConfig {
	icon: string
	name: string
	trigger(tab: any): Promise<void> | void
	isFor(tab: any): Promise<boolean> | boolean
	isDisabled?: (tab: any) => boolean
}

declare interface ITabPreviewConfig {
	name: string
	fileMatch: string
	createPreview(tabSystem: any, tab: any): Promise<any | undefined>
}

/**
 * Module that allows access to bridge.'s tab system.
 */
 declare module '@bridge/tab' {
    /**
     * @link https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/CommonTab.ts
     */
    export const ContentTab: any
    /**
     * @link https://github.com/bridge-core/editor/blob/main/src/components/TabSystem/FileTab.ts
     */
    export const FileTab: any

    /**
	 * Register new FileTabs to be picked up by the isTabFor tab system method
	 * @param FileTabClass FileTab class
	 */
	export function register(FileTabClass: any): IDisposable

    /**
	 * Useful for ContentTabs: Programmatically add the tab to the tab system
	 * @param tab Tab to add to the tab system
	 */
	export function openTab(FileTabClass: any, splitScreen: boolean): Promise<any>

    /**
	 * Given a file path relative to the project root, open the corresponding file inside of bridge.'s tab system
	 * @param filePath File to open
	 * @param selectTab Whether to automatically select the tab
	 */
	export function openFilePath(filePath: string, selectTab: boolean): Promise<void>
}

/**
 * Module that allows extensions to create toolbar tabs.
 */
 declare module '@bridge/toolbar' {
    /**
     * Add a new category to the app toolbar.
     * @param category 
     */
    export function addCategory(category: any): void
    /**
     * Used to create new toolbar categories.
     * @link https://github.com/bridge-core/editor/blob/main/src/components/Toolbar/ToolbarCategory.ts
     */
    export const ToolbarCategory: any
    /**
     * Allows creating/disposing new app actions.
     * @link https://github.com/bridge-core/editor/blob/main/src/components/Actions/ActionManager.ts
     */
    export const actionManager: any
}

/**
 * Module that provides programmatic access to [Vue](https://vuejs.org/) components defined inside of the plugin's `ui/` folder.
 */
 declare module '@bridge/ui' {
    /**
     * @example
     * ```js
     * //Accesses the component inside of the ui/Main.vue file
     * const { Main } = await require('@bridge/ui')
     * 
     * 
     * //Accesses the component inside of the ui/Nested/Main.vue file
     * const {
     *     Nested: { Main: Main2 },
     * } = await require('@bridge/ui')
     * ```
     */
    export const UI: any

    export const BuiltIn: BuiltIn
}

declare interface BuiltIn {
    /**
     * A helper for quickly creating windows.
     * @example
     * ```html
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
     * ```
     */
    BaseWindow: any
    /**
     * A helper for quickly creating sidebar windows.
     * @example
     * ```html
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
     * ```
     */
    SidebarWindow: any
}

/**
 * Module that provides common functions to developers.
 */
 declare module '@bridge/utils' {
    /**
     * Opens a given url inside of the user's default browser.
     * @param url 
     * Url to open in the browser.
     */
    export function openExternal(url: string): void
}

/**
 * Module that provides access to bridge's window system.
 */
 declare module '@bridge/windows' {
	/**
	 * @link https://github.com/bridge-core/editor/blob/main/src/components/Windows/BaseWindow.ts
	 */
    export const BaseWindow: any

    /**
     * 
     * @param vueComponent 
     * @param state 
     * 
     * @deprecated Calling "createWindow" is deprecated. Please replace direct function calls by defining a class based window instead.
     */
    export function createWindow(
		vueComponent: any,
		state: Record<string, unknown>
	)

	/**
	 * Creates a new information window and displays it.
	 * @param displayName 
	 * Title of the window.
	 * @param displayContent 
	 * Text content of the window.
	 */
    export function createInformationWindow(displayName: string, displayContent: string): void

	/**
	 * Create a new input window and displays it.
	 * @param displayName 
	 * Title of the window.
	 * @param inputLabel 
	 * Label to show on the input.
	 * @param defaultValue 
	 * Default value of the input.
	 * @param onConfirm 
	 * Callback to run when the confirm button is pressed.
	 * @param expandText 
	 * Text to append to the input.
	 */
    export function createInputWindow(
		displayName: string,
		inputLabel: string,
		defaultValue: string,
		onConfirm: (input: string) => void,
		expandText?: string
	): void
    
	/**
	 * Creates a new dropdown window and displays it.
	 * @param displayName 
	 * Title of the window.
	 * @param placeholder 
	 * Placeholder text of the dropdown input.
	 * @param options 
	 * List of options to be available in the dropdown.
	 * @param defaultSelected 
	 * The value from 'options' that should be selected by default.
	 * @param onConfirm 
	 * Callback to run when the confirm button is pressed.
	 */
    export function createDropdownWindow(
		displayName: string,
		placeholder: string,
		options: string[],
		defaultSelected: string,
		onConfirm: (input: string) => void
	): void

	/**
	 * Creates a confirm window and displays it.
	 * @param displayContent 
	 * Text content of the window.
	 * @param confirmText 
	 * Text to show on the confirm button.
	 * @param cancelText 
	 * Text to show on the cancel button.
	 * @param onConfirm 
	 * Callback to run when the confirm button is pressed.
	 * @param onCancel 
	 * Callback to run when the cancel button is pressed.
	 */
    export function createConfirmWindow(
		displayContent: string,
		confirmText: string,
		cancelText: string,
		onConfirm: () => void,
		onCancel: () => void
	): void
}

declare interface IDisposable {
    dispose: () => void
}

/**
 * Module that allows you to access the current theme and react to when it changes.
 */
declare module '@bridge/theme' {
    /**
     * Get the color code of the given color name, from the current theme.
     * @param name 
     * The name of the color to get.
     */
    export function getColor(name: TColorName): string

    /**
     * Create a callback to be called when the given theme mode changes theme.
     * @param func 
     */
    export function onChange(func: (mode: 'dark' | 'light') => void): IDisposable

    /**
     * Gets the current theme mode.
     */
    export function getCurrentMode(): "light" | "dark"

    /**
     * Get the highlighter info of a give color name.
     * @param name 
     */
    export function getHighlighterInfo(name: string): {
        color?: string | undefined;
        background?: string | undefined;
        textDecoration?: string | undefined;
        isItalic?: boolean | undefined;
    } | undefined
}

declare type TColorName = 'text'|
'toolbar'|
'expandedSidebar'|
'sidebarNavigation'|
'primary'|
'secondary'|
'accent'|
'error'|
'info'|
'warning'|
'success'|
'background'|
'menu'|
'footer'|
'tooltip'|
'sidebarSelection'|
'tabActive'|
'tabInactive'|
'lineHighlightBackground'

/**
 * Module that allows access to specific functions releated to the current project.
 */
declare module '@bridge/project' {
    /**
     * Check whether the current project contains the specified packs.
     * @param packs
     * The pack ids to check for.
     */
    export function hasPack(packs: PackTypeId[]): boolean

    /**
     * Register a pack exporter to be used to export the project.
     * @param exporter 
     * The exporter definition to register.
     */
    export function registerExporter(exporter: IExporter): void

    /**
     * Force compilation of the project using the specified compiler config.
     * @param configFile 
     * The name of the compiler config to compiler with. The config should be in the "<projectName>/.bridge/compiler/" directory.
     */
    export function compile(configFile: string): Promise<void>

    /**
     * Force the compilation of specified files.
     * @param paths 
     * The paths of the files to compile, relative to the project root.
     */
    export function compileFiles(paths: string[]): Promise<void>
}

declare type PackTypeId = | 'behaviorPack'
| 'resourcePack'
| 'skinPack'
| 'worldTemplate'

declare interface IExporter {
	icon: string
	name: string
	isDisabled?: () => Promise<boolean> | boolean
	export: () => Promise<void>
}