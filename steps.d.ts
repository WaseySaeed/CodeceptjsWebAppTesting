/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type Customer = typeof import('./helper/customer');
type Transaction = typeof import('./helper/transaction');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    customer: Customer;
    transaction: Transaction;
  }
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
