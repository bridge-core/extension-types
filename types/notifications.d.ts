declare module '@bridge/notifications' {
    export function create(config: INotificationConfig): NotificationClass
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

declare interface NotificationClass {
	/**	
	 * @protected
	 */
	id: string
	/**
	 * @protected
	 */
	_isVisible: boolean

	new (config: INotificationConfig)

	get icon(): string | undefined
	get message(): string | undefined
	get color(): string | undefined
	get textColor(): string | undefined
	get isVisible(): boolean

	onClick(): void
	onMiddleClick(): void

	addClickHandler(cb: () => void): void

	show(): void

	dispose(): void

	/**
	 * @protected
	 */
	updateAppBadge(): void
}