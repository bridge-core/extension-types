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