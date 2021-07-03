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
     * const { create } = await require('@bridge/sidebar')
     * const { MyComponent } = await require('@bridge/ui')
     * 
     * create({
     * 	id: 'myExtension',
     * 	displayName: 'Click Me',
     * 	icon: 'mdi-apple',
     * 	component: MyComponent
     * })
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