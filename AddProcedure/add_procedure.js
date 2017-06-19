const highlightElement =require('../BaseFunctionsPage/highlightelement.js');

console.log("This is start of Add Procedure============>");


var AddProcedure = function(){
    this.procedureName = element(by.css('input.ui-inputtext.ui-widget.ui-state-default.ui-corner-all'));
    this.amount = element(by.css('[formcontrolname="amount"]'));
    this.submitBtn = element(by.buttonText('DONE'));

    this.addProcedureKey = function(procedure_key){
        highlightElement.highlightElement(this.procedureName);
        browser.actions().mouseMove(this.procedureName.sendKeys(procedure_key)).perform().then(function(){
            browser.sleep(4000);
            browser.actions().sendKeys(protractor.Key.DOWN).perform();
            browser.sleep(500);              
            browser.actions().sendKeys(protractor.Key.ENTER).perform();    
        });
    };

    this.addAmountForProcedure = function(amount){
        highlightElement.highlightElement(this.amount);
        this.amount.sendKeys(amount);
        browser.sleep(2000);

    };

    this.submitDone = function(){
        highlightElement.highlightElement(this.submitBtn);
        this.submitBtn.click();
        browser.sleep(2000);
    };
};

module.exports ={
    addProcedure1: AddProcedure
}