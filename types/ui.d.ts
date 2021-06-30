declare module '@bridge/ui' {
    export const UI: any

    export const BuiltIn: BuiltIn
}

declare interface BuiltIn {
    BaseWindow: VueComponent
    SidebarWindow: VueComponent
}