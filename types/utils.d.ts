/**
 * Module that provides common functions to developers.
 */
declare module '@bridge/utils' {
    /**
     * Opens a given url inside of the user's default browser.
     * @param url 
     * Url to open in the browser.
     */
    export function openExternal(url: string): void
}