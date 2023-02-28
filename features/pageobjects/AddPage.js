const { config } = require("../../wdio.conf");
const assert = require('assert');
const addPageLoc = require("../../Locators/AddPageLocators")
const scr = require('../pageobjects/ScreenshotPage')
class AddPage{

    constructor(){
        this.plusOpt = addPageLoc.plusOpt;
        this.answer = addPageLoc.answer;
    }
    // Since we parameterized the value for the locator, we kept it as is.
    getNumber(num){
        return $('[onclick="r('+num+')"]')
    }

    async tapNumber(num){
        await this.getNumber(num).click();
        scr.takeScreenshot('tapping_number');
    }

    async tapOperator(){
        await this.plusOpt.click()
        await browser.pause(3000); 
        scr.takeScreenshot('tapping_operator');
    }

    async getAns(){
        let txt = await this.answer.getText()
        console.log("Answer of addition: " +txt);
        scr.takeScreenshot('gettingTextOfElement');
    }

    async visitWeb(){
        await browser.url(config.baseUrl)
        scr.takeScreenshot('webUrl');
    }

    async clickNum1(num1){
        await this.getNumber(num1).click();
        scr.takeScreenshot('clicking_number1');
    }

    async clickNum2(num2){
        await this.getNumber(num2).click();
        scr.takeScreenshot('clicking_number2');
    }

    async clickOperator(opt){
        await $('[onclick="r(\''+opt+'\')"]').click();
        // await this.operator.replace('XXX', opt).click();
        scr.takeScreenshot('clicking_operator');
    }

    async verifyAnswer(ans){
        let result = await this.answer.getText()
        console.log("Retrieving text value from element: " +result)
        assert.equal(result,parseInt(ans));
        scr.takeScreenshot('verifyingResult');
    }
}
module.exports = new AddPage();