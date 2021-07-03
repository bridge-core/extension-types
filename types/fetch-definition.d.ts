/**
 * Grants access to the lightning cache database.
 */
declare module '@bridge/fetch-definition' {
    /**
     * Search through the definitions `fetchDefs` in `fileType` files for `fetchSearch`.
     * @param fileType 
     * @param fetchDefs 
     * @param fetchSearch 
     * @param fetchAll 
     * 
     * @example
     * const { fetchDefinition } = await require('@bridge/fetch-definition')
     * 
     * const walkAnimations = await fetchDefinition(
     * 	'animation',
     * 	['ids'],
     * 	'animation.walk',
     * 	false
     * )
     * 
     * // With fetchAll=false you still get a string[] even though it only has one entry
     * // => Consistency
     * const walkAnimation = walkAnimations[0]
     */
    export function fetchDefinition(
        fileType: string, 
        fetchDefs: string[], 
        fetchSearch: string, 
        fetchAll?: boolean
    ): Promise<string[]>
}