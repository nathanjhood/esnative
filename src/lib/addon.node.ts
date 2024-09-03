
/**
 * The 'addon' C++ addon interface.
 */
interface addon {
  /**
   * Returns a string, confirming the cmake-js addon is online.
   * @returns {string}
   */
  hello(): string;
  /**
   * Returns a number, confirming the Napi Addon API version number.
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
const addon: addon = require(`${process.env['BUILD_DIR']}/lib/addon.node`);
export = addon;


// export default addon;
