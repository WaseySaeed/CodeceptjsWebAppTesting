const { I } = inject();

export const addCustomer = (firstName: string, lastName: string, postCode: string) => {
  I.fillField(locate('input').withAttr({ placeholder: 'First Name' }), firstName);
  I.fillField(locate('input').withAttr({ placeholder: 'Last Name' }), lastName);
  I.fillField(locate('input').withAttr({ placeholder: 'Post Code' }), postCode);
  I.click(locate('button').withText('Add Customer'));
  I.click(locate('form').withAttr({ name: 'myForm' }).find(locate('button').withText('Add Customer')));
  I.acceptPopup();
};

export const validateCustomerIsPresent = (firstName: string, lastName: string) => {
  I.seeElement(locate('td').withText(lastName).after(locate('td').withText(firstName)));
};

export const deleteCustomer = (firstName: string, lastName: string) => {
  I.click(`//td[text()='${firstName}']//following-sibling::td[text()='${lastName}']//following-sibling::td//button`);
};
