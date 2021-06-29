declare module '@bridge/path' {
    /**
     * Return the directory name of a path.
     * @param p 
     * The path to evaluate.
     */
    export function dirname(p: string): string
    /**
     * Join all arguments together and normalize the resulting path.
     * @param paths 
     * Paths to join.
     */
    export function join(...paths: string[]): string
    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
     * @param p 
     * The path to evaluate
     */
    export function extname(p: string): string
    /**
     * Return the last portion of a path.
     * @param p 
     * The path to evaluate.
     * @param ext 
     * Optionally, an extension to remove from the result.
     */
    export function basename(p: string, ext?: string | undefined): string
    /**
     * Solve the relative path from {from} to {to}. At times we have two absolute paths, and we need to derive the relative path from one to the other.
     * @param from 
     * @param to 
     */
    export function relative(from: string, to: string): string
}