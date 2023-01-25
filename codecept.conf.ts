import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/**.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
      show: true,
      browser: 'chromium',
    },
    REST: {
      endpoint: 'http://localhost:8080',
    },
    JSONResponse: {},
  },
  include: {
    customer: './helper/customer.ts',
    transaction: './helper/transaction.ts',
  },
  name: 'Test',
  fullPromiseBased: true,
};
