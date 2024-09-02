# esnative

Native meets modern.

---

## Quickstart

Install NodeJS dependencies:

```sh
yarn install
```

Build the Native module:

```sh
yarn cmake:build
```

Build the NodeJS module:

```sh
yarn pkg:build
```

Start the application:

```sh
yarn start
```

Successful output:

```sh
$ yarn start
yarn run v1.22.22
$ node ./dist/cli.mjs
addon.node is online!
Node Addon API 8
Done in <time>s.
```

## Contents

- [esnative](#esnative)
  - [Quickstart](#quickstart)
  - [Contents](#contents)
  - [Motivations](#motivations)
  - [Commands](#commands)
  - [Notes](#notes)
---

## Motivations

`esnative` intends to create a simple, clean, and well-defined entry point for projects targeting native platforms combining modern ECMAscript tooling, features, and workflow, with the power of CMake-driven, system-level languages such as C and C++, with bindings provided by `Node Addon API`.

This repository currently represents a project template. Once built (see [Quickstart](#quickstart)), the application exposes two components - a library, and a command-line interface - as entry points. The command-line interface's functionality is derived from the library.

- The library consists of two distinct parts; one is *written* in `c++` (or optionally `c` or `rust`), then *compiled* to a system-native binary file with the file extension `.node`; the other part is *written* in `Typescript`, then *transpiled* to `Javascript`, and which imports the functions and variables from the binary file (on disk), binds them to corresponding ECMAscript, and then exports the bindings as an ECMA module.

- The command-line interface is purely - or, almost exclusively - written in modern Typescript, then compiled into a module-friendly, `npm`-ready bundle of it's own. It imports and consumes the library - via the bindings - , and is intended to be executed by the `node` runtime.

The particularly interesting part of this project, is using NodeJS as an *entry point* to system-level languages and their paradigms. Usually, in system-application development, a `main()` function is written in the lower-level language and defines what the application should *do* when it is executed. The `main()` call is necessarily compiled-in to the binary, and thus any changes by the developer (such as bug fixes, enhancements, etc) require re-configuring and rebuilding. In the case of a Node Addon, our application entrypoint is written in ECMAscript languages like `Javascript` and `Typescript`; of which, even the latter now offers near-instant transpilation times, and much more rapid iteration over development cycles in comparison to native coding languages.

In short, I'm trying to make the commands shown below a repeatable, accessible entry point for new project templates:

## Commands

```jsonc
{
    /** 'PUBLIC' COMMANDS INTENDED FOR CONSUMERS OF THE TEST MODULE */

    "start":              "node ./dist/cli.mjs",
    "dev":                "tsx  ./src/cli.ts",
    "build":              "tsc --noEmit && cmake-js --build && pkgroll --build",

    /** 'PRIVATE' COMMANDS INTENDED FOR DEVELOPERS OF THE TEST MODULE */

    // ECMAscript commands
    "pkg:build":          "pkgroll --build",
    "pkg:minify":         "pkgroll --minify",
    "pkg:sourcemap":      "pkgroll --sourcemap",
    "pkg:watch":          "pkgroll --watch",
    "pkg:clean":          "pkgroll --clean-dist",

    // Native Addon commands
    "cmake:install":      "cmake-js install",
    "cmake:postinstall":  "cmake-js compile",
    "cmake:configure":    "cmake-js configure",
    "cmake:reconfigure":  "cmake-js reconfigure",
    "cmake:build":        "cmake-js build",
    "cmake:rebuild":      "cmake-js rebuild",
    "cmake:clean":        "cmake-js clean",
    "cmake:wipe":         "cmake-js clean && rm -rvf ./node_modules",

    // maintenance
    "tsc:check":          "tsc --noEmit",

    "lint":               "eslint .",
    "lint:fix":           "eslint . --fix",

    "format":             "prettier --check ./**/*.{js,jsx,ts,tsx,css,md,json} --config ./prettier.config.mjs",
    "format:fix":         "prettier --write ./**/*.{js,jsx,ts,tsx,css,md,json} --config ./prettier.config.mjs"

    // tests (tbc...)
},
```

The template *should* build and run successfully using the commands above (and/or the others in `package.json`). The built project, and commands above which interact with it, represent what I intend for this project to *facilitate* for others to do; if these early concepts pass the validation stage, then the template project will be moved into a sub-directory (probably `/packages/template`), and the main codebase of `esnative` shall take the form of the required tooling for scaffolding and developing new projects which resemble the template.

I expect to experiment with some front-end libraries and frameworks in addition to the current template; if, and once, the two are integrating with absolute ease, this project will likely change form as proposed.

For the time being, it is a show of final intentions, and one I thought was interesting enough to make public.

Thanks for reading, let me know if any interest, curiousity, or otherwise.

[Nathan J. Hood](https://github.com/nathanjhood)

---

## Notes

This project uses [my personal fork of cmake-js](https://github.com/nathanjhood/cmake-js#cmakejs_cmake_api); I drafted an API to provide the CMake side of consuming projects with some wrapper functions. See my `CMakeLists.txt` for an example of how the `.node` binary creation is configured; more documentation is available in the forked repo.

Further useful functionality is particularly inspired by `tsx` and `pkgroll`, both seperately and as a one-fits-all solution for creating modern ECMA bundles. They both offer some great features that are worth looking at closer, if you're hacking on this project.
