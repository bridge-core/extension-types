/**
 * Utility module that provides access to environmental project data.
 */
declare module '@bridge/env' {
    /**
     * Gets the current version for bridge.
     */
    export const APP_VERSION: string
    /** 
     * Returns the path to the current behavior pack.
     */
    export function getCurrentBP(): string
    /**
     * Returns the path to the current resource pack.
     */
    export function getCurrentRP(): string
    /**
     * Returns the path to the current project.
     */
    export function getCurrentProject(): string
    /**
     * Returns the target minecraft version of the current project.
     */
    export function getProjectTargetVersion(): Promise<string | undefined>
    /**
     * Returns the prefix/namespace of the current project.
     */
    export function getProjectPrefix(): Promise<string | undefined>
    /**
     * Returns the author of the current project.
     */
    export function getProjectAuthor(): Promise<string | undefined>
}