/// <reference types="./common" />

/**
 * Module that allows extensions to create notifications.
 */
declare module '@bridge/notifications' {
	/**
	 * Create a new notification.
	 * @param config 
	 * @example
	 * const { create } = await require('@bridge/notification')
	 * 
	 * create(
	 * 	icon: 'mdi-apple',
	 * 	message: 'Hello World!',
	 * 	color: 'blue'
	 * 	textColor: 'white',
	 * 	disposeOnMiddleClick: true,
	 * 
	 * 	() => {
	 * 		// Do something...
	 * 	},
	 * 	() => {
	 * 		// Do something...
	 * 	}
	 * )
	 */
    export function create(config: INotificationConfig): any
	/**
	 * Create a new error notification.
	 * @param error 
	 * @example
	 * const { createError } = await require('@bridge/notification')
	 * 
	 * createError(new Error(`Oops, something went wrong :(`))
	 * 
	 * try {
	 * 	const t = 0
	 * 	t = 2 //Throws error
	 * } catch (error) {
	 * 	createError(error)
	 * }
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