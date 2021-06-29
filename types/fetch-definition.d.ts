declare module '@bridge/fetch-definition' {
    export function fetchDefinition(
        fileType: string, 
        fetchDefs: string[], 
        fetchSearch: string, 
        fetchAll?: boolean
    ): Promise<string[]>
}