const addon: typeof import('./lib/addon.node') = require('./lib/addon.node');

export type Json =
  | string
  | number
  | boolean
  | { [key: string]: Json | undefined }
  | Json[]
  | null

export function handleError(error: any) {
  // validation
  if (!(error instanceof Error)) {
    console.error(
      "handleError() was passed something that wasn't an instance of Error:",
      error,
    );
    return;
  }
  console.error(error);
  return;
}

export function handleWarning(warning: any) {
  // validation
  if (!(warning instanceof Error)) {
    console.error(
      "handleWarning() was passed something that wasn't an instance of Error:",
      warning,
    );
    return;
  }
  // process
  console.warn(warning);
  return;
}

export function handleRejection(reason?: any) {
  if (reason) {
    console.error(reason);
  } else {
    console.error("unhandled Promise rejection");
  }

  process.exit(1);
}

export function handleArchitecture(arch: NodeJS.Architecture) {
  console.info(arch);
  return;
}

export function handlePlatform(platform: NodeJS.Platform) {
  console.info(platform);
  return;
}

export function handleProcessEnv(env: NodeJS.ProcessEnv) {
  console.info(env);
  return;
}

export function handleProcessConfig(config: NodeJS.ProcessConfig) {
  console.info(config);
  return;
}

export function handleProcess(process: NodeJS.Process) {


  console.info(addon.hello());
  console.info(addon.version());
  console.info(addon.global());
  console.info(addon.undefined());
  console.info(addon.null());
  console.info(addon.getNapiVersion());
  console.info(addon.getNodeVersion());
  console.info({
    title: process.title,
    version: process.version,
    pid: process.pid,
    platform: process.platform,
    arch: process.arch,
    // config: process.config,
  });
  return;
}
