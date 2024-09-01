#!/usr/bin/env -S yarn tsx

process.on("unhandledRejection", (error) => {
  throw error;
});

import { handleProcess } from ".";

const main: () => number | Promise<number> = () => {
  //
  const EXIT_SUCCESS = 0;
  const EXIT_FAILURE = 1;
  let errors: Error[];
  //
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
