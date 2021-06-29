declare module '@bridge/env' {
    export const APP_VERSION: string
    export function getCurrentBP(): string
    export function getCurrentRP(): string
    export function getCurrentProject(): string
    export function getProjectTargetVersion(): Promise<string | undefined>
    export function getProjectPrefix(): Promise<string | undefined>
    export function getProjectAuthor(): Promise<string | undefined>
}