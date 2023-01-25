const { I } = inject();

export const deposit = (amount: number) => {
  I.click(locate('button').withText('Deposit'));
  I.fillField(locate('input').withAttr({ placeholder: 'amount' }), amount);
  I.click(locate('button').withAttr({ type: 'submit' }));
  I.see('Deposit Successful');
  I.wait(3);
};

export const withdrawl = (amount: number) => {
  I.click(locate('button').withText('Withdrawl'));
  I.fillField(locate('input').withAttr({ placeholder: 'amount' }), amount);
  I.click(locate('button').withAttr({ type: 'submit' }));
  I.see('Transaction successful');
  I.wait(3);
};

export const verifyTransaction = (amount: number, transactionType: string) => {
  I.click(locate('button').withText('Transaction'));
  I.seeElement(`//td[text()='${transactionType}']//preceding-sibling::td[text()='${amount}']`);
  I.click('Back');
};
