const {Given, When, Then} = require('@wdio/cucumber-framework')

const loginpage = require('../pageobjects/LoginPage')

Given(/^User is on login page$/, async () =>{
    await loginpage.VisitDemoWeb();
})

When(/^User enters email "(.*)" and password "(.*)"$/, async (email, pwd) =>{
    await loginpage.enterUsername(email);
    await loginpage.enterPassword(pwd);
    await loginpage.ClickBtn()
})

Then(/^User verifies "(.*)" message on page$/, async (msg) =>{
    await loginpage.verifyMessage(msg);
})