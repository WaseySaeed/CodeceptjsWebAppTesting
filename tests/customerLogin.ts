Feature('Customer login');

Scenario('Performing operations as a customer', async ({ I, transaction }) => {
  I.amOnPage('/');
  I.click(locate('button').withText('Customer Login'));
  I.selectOption('userSelect', 'Hermoine Granger');
  I.click('Login');
  I.selectOption('accountSelect', '1003');

  await transaction.deposit(50000);
  await transaction.verifyTransaction(50000, 'Credit');
  I.see('50000');

  await transaction.withdrawl(3000);
  await transaction.verifyTransaction(3000, 'Debit');
  I.see('47000');

  await transaction.withdrawl(2000);
  await transaction.verifyTransaction(2000, 'Debit');
  I.see('45000');

  await transaction.deposit(5000);
  await transaction.verifyTransaction(5000, 'Credit');
  I.see('50000');

  await transaction.withdrawl(10000);
  await transaction.verifyTransaction(10000, 'Debit');
  I.see('40000');

  await transaction.withdrawl(15000);
  await transaction.verifyTransaction(15000, 'Debit');
  I.see('25000');

  await transaction.deposit(1500);
  await transaction.verifyTransaction(1500, 'Credit');
  I.see('26500');
});
