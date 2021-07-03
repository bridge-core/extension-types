/// <reference types="./common" />

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