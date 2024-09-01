// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module exports functions, declare them like so.
 */

/**
 *
 * @param {any} error The error to handle
 */
export function handleError(error: any);

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
export function handleArchitecture(arch: NodeJS.Architecture);

/**
 *
 * @param {NodeJS.Platform} platform The platform to handle
 */
export function handlePlatform(platform: NodeJS.Platform);

/**
 *
 * @param {NodeJS.ProcessEnv} env The env to handle
 */
export function handleProcessEnv(env: NodeJS.ProcessEnv);

/**
 *
 * @param {NodeJS.ProcessConfig} config The config to handle
 */
export function handleProcessConfig(config: NodeJS.ProcessConfig);

/**
 *
 * @param {NodeJS.process} process The process to handle
 */
export function handleProcess(process: NodeJS.Process);

/*~ You can declare types that are available via importing the module */
export interface SomeType {
  name: string;
  length: number;
  extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;
