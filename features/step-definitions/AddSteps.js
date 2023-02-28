const { Given, When, Then } = require('@wdio/cucumber-framework');

const addPage = require('../pageobjects/AddPage');


Given(/^User is on calculator page$/, async () => {
    await addPage.visitWeb()
  });

When(/^User taps on "(\d+)"$/, async (num) => {
    await addPage.tapNumber(num)
})

When(/^User taps on operator$/, async () => {
    await addPage.tapOperator()
})

Then(/^User verifies answer as "(\d+)"$/, async (ans) => {
    await addPage.getAns(ans)
})

When(/^User clicks on num1 "([^"]*)"$/, async (num1) => {
    await addPage.clickNum1(num1)
})

When(/^User clicks on num2 "([^"]*)"$/, async (num2) => {
    await addPage.clickNum2(num2)
})

When(/^User clicks on the "([^"]*)"$/, async(opt) =>{
    await addPage.clickOperator(opt)
})

Then(/^User verifies "([^"]*)"$/, async(ans) =>{
    await addPage.verifyAnswer(ans);
})