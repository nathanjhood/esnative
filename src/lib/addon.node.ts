
interface addon {
    /**
   * Returns a number, containing the Node Addon API version number.
   * @example
   * ```js
   * const napiVersion = addon.getNapiVersion();
   * console.log(napiVersion); // prints a number to the terminal
   * ```
   * @returns {number}
   */
  getNapiVersion(): number;

  /**
   * Returns an object, containing the NodeJS version number.
   * ```js
   * const nodeVersion = addon.getNodeVersion();
   * console.log(nodeVersion); // prints an object to the terminal
   * ```
   * @returns {object}
   */
  getNodeVersion(): object;
}
declare const addon: addon;

export = addon;
