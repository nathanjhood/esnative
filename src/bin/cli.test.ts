import * as test from 'node:test';

const testName = 'index';
const testController = new AbortController();
const testOptions = {
  signal: testController.signal,
  timeout: 3000,
};

testController.signal.addEventListener(
  'abort',
  (event) => {
    return console.log('Received event:', event.type);
  },
  {
    once: true, // this will cleanup after calling once, preventing memory leaks
  }
);

process.on('unhandledRejection', (error) => {
  testController.abort(error);
  throw error;
});

test.describe(
  testName || 'unnamed suite',
  {
    signal: testOptions.signal || undefined,
    timeout: testOptions.timeout || 3000,
  },
  async (suiteContext: test.SuiteContext) => {
    //
    // MOCKS
    //
    const mockWarning: NodeJS.EmitWarningOptions = {
      code: "mocked code",
      detail: "mocked detail",
      type: "Mock"
    }
    const mockAddFn = test.mock.fn((a: number, b: number) => {
      return a + b;
    })
    const mockEmitter = test.mock.fn((warning: Error) => {
      const { cause: cause, message: message, name: name, stack: stack } = warning;
      const defaults: NodeJS.EmitWarningOptions = {
        detail: message,
        ctor() { const Fn = process.emitWarning; return Fn; },
        code: name,
        type: 'Warning'
      };
    })

    //
    // HOOKS
    //

    //
    test.before(
      (hookContext: test.TestContext | test.SuiteContext) => {
        if (typeof hookContext === typeof test.TestContext) {
          //
        } else if (typeof hookContext === typeof test.SuiteContext) {
          //
        }
        if (process.env['VERBOSE'])
          return console.info(
            `${hookContext.name} calling hook: ${testName}.before()...`
          );
      },
      {
        signal: testOptions.signal || undefined,
        timeout: testOptions.timeout || 3000,
      }
    );

    //
    test.after(
      (hookContext: test.TestContext | test.SuiteContext) => {
        if (typeof hookContext === typeof test.TestContext) {
          //
        } else if (typeof hookContext === typeof test.SuiteContext) {
          //
        }
        if (process.env['VERBOSE'])
          return console.info(
            `${hookContext.name} calling hook: ${testName}.after()...`);
        return;
      },
      {
        signal: testOptions.signal || undefined,
        timeout: testOptions.timeout || 3000,
      }
    );

    //
    test.beforeEach(
      (hookContext: test.TestContext | test.SuiteContext) => {
        if (typeof hookContext === typeof test.TestContext) {
          //
        } else if (typeof hookContext === typeof test.SuiteContext) {
          //
        }
        if (process.env['VERBOSE'])
          return console.info(
            `${hookContext.name} calling hook: ${testName}.beforeEach()...`
          );
        return;
      },
      {
        signal: testOptions.signal || undefined,
        timeout: testOptions.timeout || 3000,
      }
    );

    //
    test.afterEach(
      (hookContext: test.TestContext | test.SuiteContext) => {
        if (typeof hookContext === typeof test.TestContext) {
          //
        } else if (typeof hookContext === typeof test.SuiteContext) {
          //
        }
        if (process.env['VERBOSE'])
          return console.info(
            `${hookContext.name} calling hook: ${testName}.afterEach()...`
          );
        return;
      },
      {
        signal: testOptions.signal || undefined,
        timeout: testOptions.timeout || 3000,
      }
    );

    //
    // TESTS
    //

    //
    test.it(
      'equals',
      {
        signal: testOptions.signal || undefined,
        timeout: testOptions.timeout || 3000,
      },
      (testContext: test.TestContext) => {

        testContext.assert.deepStrictEqual(mockAddFn(1, 1), 2)
      }
    );
  }
);
