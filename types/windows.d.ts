declare module '@bridge/windows' {
    export const BaseWindow: BaseWindowClass

    /**
     * 
     * @param vueComponent 
     * @param state 
     * 
     * @deprecated Calling "createWindow" is deprecated. Please replace direct function calls by defining a class based window instead.
     */
    export function createWindow(
		vueComponent: VueComponent,
		state: Record<string, unknown>
	)

    export function createInformationWindow(displayName: string, displayContent: string): void

    export function createInputWindow(
		displayName: string,
		inputLabel: string,
		defaultValue: string,
		onConfirm: (input: string) => void,
		expandText?: string
	): void
    
    export function createDropdownWindow(
		displayName: string,
		placeholder: string,
		options: string[],
		defaultSelected: string,
		onConfirm: (input: string) => void
	): void

    export function createConfirmWindow(
		displayContent: string,
		confirmText: string,
		cancelText: string,
		onConfirm: () => void,
		onCancel: () => void
	): void
}