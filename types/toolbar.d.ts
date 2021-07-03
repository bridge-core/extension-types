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