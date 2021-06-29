declare module '@bridge/toolbar' {
    export function addCategory(category: ToolbarCategory): void
    export const ToolbarCategory: ToolbarCategory
    export const actionManager: ActionManager
}

declare interface ToolbarCategory {
    new ()
}

declare interface ActionManager {}