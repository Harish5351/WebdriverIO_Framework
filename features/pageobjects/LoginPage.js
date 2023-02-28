const { config } = require("../../wdio.conf")
const assert = require('assert');
const loginPageLocators = require("../../Locators/loginPageLocators");

class LoginPage{

    constructor(){
        this.emailField = loginPageLocators.emailField;
        this.pwdField = loginPageLocators.pwdField;
        this.submitBtn = loginPageLocators.submitBtn
        // this.successMessage = loginPageLocators.successMessage;
    }

    async VisitDemoWeb(){
        await browser.url(config.seleniumLoginUrl);
    }

    async enterUsername(email){
        await this.emailField.setValue(email);
    }

    async enterPassword(pwd){
        await this.pwdField.setValue(pwd);
    }

    async ClickBtn(){
        await this.submitBtn.click();
    }

    async verifyMessage(msg){
        // let eleMsg = await this.successMessage.replace('XXX',msg)
        let eleMsg = await $("//h3[normalize-space()='"+msg+"']")
        console.log(eleMsg.isExisting())
    }
}
module.exports = new LoginPage();