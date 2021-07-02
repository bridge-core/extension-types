/**
 * Module that allows access to the com.mojang folder.
 */
declare module '@bridge/com-mojang' {
    /**
     * States whether com.mojang has been setup by the user.
     */
    export const setup: Signal<void>
    /**
     * Returns the com.mojang FileSystem instance.
     */
    export function requestFileSystem(): Promise<FileSystem>
}