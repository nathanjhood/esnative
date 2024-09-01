/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    /**
     * when set to `true`, `1`, `2`, `3`, or an empty string causes `NO_COLOR`
     * and `NODE_DISABLE_COLORS` to be ignored.
     */
    readonly FORCE_COLOR?: "1" | "2" | "3" | "";
    /**
     * `Alias for NODE_DISABLE_COLORS`
     */
    readonly NO_COLOR?: "true" | "false";
    /**
     * set to `1` to disable colors in the REPL
     */
    readonly NODE_DISABLE_COLORS?: "1" | string;
    /**
     * ','-separated list of core modules that should print debug information
     */
    readonly NODE_DEBUG?: string;
    /**
     * ','-separated list of C++ core debug categories that should print debug
     * output
     */
    readonly NODE_DEBUG_NATIVE?: string;
    /**
     * path to additional CA certificates file. Only read once during process
     * startup.
     */
    readonly NODE_EXTRA_CA_CERTS?: string;

    /**
     * directory to output v8 coverage JSON to
     */
    readonly NODE_V8_COVERAGE?: string;

    /**
     * sets the number of threads used in libuv's threadpool
     */
    readonly UV_THREADPOOL_SIZE: string;
  }
}
