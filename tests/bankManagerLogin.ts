Feature('bankManagerLogin');

Scenario('Adding and removing customer through bank manager login', async ({ I, customer }) => {
  I.amOnPage('/');
  I.click(locate('button').withText('Bank Manager Login'));
  I.click(locate('button').withText('Add Customer'));
  customer.addCustomer('Christopher', 'Connely', 'L789C349');
  customer.addCustomer('Frank', 'Christopher', 'A897N450');
  customer.addCustomer('Christopher', 'Minka', 'M098Q585');
  customer.addCustomer('Connely', 'Jackson', 'L789C349');
  customer.addCustomer('Jackson', 'Frank', 'L789C349');
  customer.addCustomer('Minka', 'Jackson', 'A897N450');
  customer.addCustomer('Jackson', 'Connely', 'L789C349');
  I.click(locate('button').withText('Customers'));
  customer.validateCustomerIsPresent('Christopher', 'Connely');
  customer.validateCustomerIsPresent('Frank', 'Christopher');
  customer.validateCustomerIsPresent('Christopher', 'Minka');
  customer.validateCustomerIsPresent('Connely', 'Jackson');
  customer.validateCustomerIsPresent('Jackson', 'Frank');
  customer.validateCustomerIsPresent('Minka', 'Jackson');
  customer.validateCustomerIsPresent('Jackson', 'Connely');
  I.fillField('Search Customer', 'Jackson');
  customer.deleteCustomer('Jackson', 'Frank');
  I.clearField('Search Customer');
  I.fillField('Search Customer', 'Christopher');
  customer.deleteCustomer('Christopher', 'Connely');
});
