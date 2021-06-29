declare module '@bridge/compare-versions' {
    /**
   * Compare [semver](https://semver.org/) version strings using the specified operator.
   * 
   * @param firstVersion First version to compare
   * @param secondVersion Second version to compare
   * @param operator Allowed arithmetic operator to use
   * @returns `true` if the comparison between the firstVersion and the secondVersion satisfies the operator, `false` otherwise.
   *
   * @example
   * ```
   * compareVersions.compare('10.1.8', '10.0.4', '>'); // return true
   * compareVersions.compare('10.0.1', '10.0.1', '='); // return true
   * compareVersions.compare('10.1.1', '10.2.2', '<'); // return true
   * compareVersions.compare('10.1.1', '10.2.2', '<='); // return true
   * compareVersions.compare('10.1.1', '10.2.2', '>='); // return false
   * ```
   */
	export function compare(
        firstVersion: string, 
        secondVersion: string, 
        operator: '>' | '>=' | '=' | '<' | '<='
    ): boolean
}