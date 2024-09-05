#!/usr/bin/env -S yarn tsx

process.on("unhandledRejection", (error) => {
  throw error;
});

import { handleProcess } from "../";

const main: () => number | Promise<number> = () => {
  //
  const EXIT_SUCCESS = 0;
  const EXIT_FAILURE = 1;
  let errors: Error[];
  // //
  // const sea: typeof import('node:sea') = require('node:sea')

  // const { getAsset, getAssetAsBlob, getRawAsset } = sea;
  // // Returns a copy of the data in an ArrayBuffer.
  // const image = getAsset('robots.txt');
  // // Returns a string decoded from the asset as UTF8.
  // const text = getAsset('robots.txt', 'utf8');
  // // Returns a Blob containing the asset.
  // const blob = getAssetAsBlob('robots.txt');
  // // Returns an ArrayBuffer containing the raw asset without copying.
  // const raw = getRawAsset('robots.txt');
  // //
  return new Promise<number>((onResolve, onReject) => {
    //
    handleProcess(process);
    //
    if (errors && errors.length) {
      //
      return onReject(errors);
    } else {
      //
      return onResolve(EXIT_SUCCESS);
    }
  }).catch((error) => {
    console.error(error);
    process.exit(EXIT_FAILURE);
  });
};

main();
