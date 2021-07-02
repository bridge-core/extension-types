/**
 * Module that allows you to modify monaco's behaviors.
 */
declare module '@bridge/monaco' {
    /**
     * Register a file formatter.
     * @link https://microsoft.github.io/monaco-editor/api/modules/monaco.languages.html#registerdocumentformattingeditprovider
     * @param languageId 
     * @param provider 
     */
    export function registerDocumentFormattingEditProvider (
		languageId: string,
		provider: any
	): void
}