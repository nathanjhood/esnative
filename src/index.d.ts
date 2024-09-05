// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

export as namespace EsNative;

export declare const addon: import('./addon/addon.node');

/**
 *
 * @param {any} error The error to handle
 */
export declare function handleError(error: any);

/**
 *
 * @param {any} warning The warning to handle
 */
export declare function handleWarning(warning: any);

/**
 *
 * @param {any | undefined} reason The reason for the rejection
 */
export declare function handleRejection(reason?: any);

/**
 *
 * @param {NodeJS.Architecture} arch The architecture to handle
 */
export declare function handleArchitecture(arch: NodeJS.Architecture);

/**
 *
 * @param {NodeJS.Platform} platform The platform to handle
 */
export declare function handlePlatform(platform: NodeJS.Platform);

/**
 *
 * @param {NodeJS.ProcessEnv} env The env to handle
 */
export declare function handleProcessEnv(env: NodeJS.ProcessEnv);

/**
 *
 * @param {NodeJS.ProcessConfig} config The config to handle
 */
export declare function handleProcessConfig(config: NodeJS.ProcessConfig);

/**
 *
 * @param {NodeJS.process} process The process to handle
 */
export declare function handleProcess(process: NodeJS.Process);
