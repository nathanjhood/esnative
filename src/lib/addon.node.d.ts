// @ts-check

declare interface addon {
  version(): void;
}

declare const addon: addon;

declare namespace addon { }

export = addon;


declare type AddonDLOpenOptions = {
  flags: number;
  promisify: boolean;
}

declare type AddonExports = {
  hello(): string;
  version(): number;
   // version: {
  //   major: number;
  //   minor: number;
  //   patch: number;
  //   release: string;
  // };
}

declare type AddonModule = { exports: AddonExports };

declare const module: AddonModule;
