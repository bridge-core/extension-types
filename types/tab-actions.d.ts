declare module '@bridge/tab-actions' {
    /**
	 * Add the default tab actions for the specific file tab.
	 * @param tab
	 */
	export function addTabActions(tab: FileTab): Promise<void>

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
	trigger(tab: FileTab): Promise<void> | void
	isFor(tab: FileTab): Promise<boolean> | boolean
	isDisabled?: (tab: FileTab) => boolean
}

declare interface ITabPreviewConfig {
	name: string
	fileMatch: string
	createPreview(tabSystem: TabSystem, tab: FileTab): Promise<Tab | undefined>
}

/**
 * @extends Tab
 */
declare abstract class FileTab {
	public isForeignFile: boolean

	constructor(
		parent: TabSystem,
		fileHandle: FileSystemFileHandle
	)

	setup(): Promise<void>

	get name(): string

	isFor(fileHandle: FileSystemFileHandle): Promise<boolean>

	getFile(): Promise<File>
	getFileHandle(): FileSystemFileHandle
}