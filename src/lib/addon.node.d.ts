/**
 * The 'addon' C++ addon interface.
 */
declare interface addon {
  /**
   * Returns a string, confirming the cmake-js addon is online.
   * @example
   * ```js
   * const addonHello = addon.hello();
   * console.log(addonHello); // prints a string to the terminal
   * ```
   * @returns {string}
   */
  hello(): string;
  /**
   * Returns a number, containing the Napi Addon API version number.
   * @example
   * ```js
   * const addonVersion = addon.version();
   * console.log(addonVersion); // prints a number to the terminal
   * ```
   * @returns {number}
   */
  version(): number;

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

  /**
   * @returns {object}
   */
  global(): object;

  /**
   * @returns {undefined}
   */
  undefined(): undefined;

  /**
   * @returns {null}
   */
  null(): null;
}

declare const addon: addon;

export = addon;

// export default addon;
