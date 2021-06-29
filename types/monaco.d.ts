declare module '@bridge/monaco' {
    /**
     * @link https://microsoft.github.io/monaco-editor/api/modules/monaco.languages.html#registerdocumentformattingeditprovider
     * @param languageId 
     * @param provider 
     */
    export function registerDocumentFormattingEditProvider (
		languageId: string,
		provider: any
	): void
}