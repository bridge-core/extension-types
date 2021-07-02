/**
 * Module that gives access to json parsing wth json5.
 */
declare module '@bridge/json5' {
    /**
     * Parses a json string to a javascript object.
     * @param str 
     * Json string to parse.
     */
    export function parse(str: string): any
}