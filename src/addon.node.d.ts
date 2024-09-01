/**
 * The 'addon' C++ addon interface.
 */
declare interface addon {
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
}

declare const addon: addon;

export = addon;
