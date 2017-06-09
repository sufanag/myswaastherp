const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var Chance = require('chance');

console.log("This is start of the clinic details =================>");
var chance = new Chance();


var ClinicDetails = function(){
    this.clinicName  = element(by.css('[formcontrolname="c_name"]'));
    this.specialisation = element(by.css('[ng-reflect-ng-class="ui-inputtext ui-widget ui-stat"]'));
    this.address = element(by.css('[placeholder="Your Address"]'));
    this.clinicPhone = element(by.css('[ng-reflect-name="mobile"]'));


    this.setclinicName = function(clinic_name){
        highlightElement.highlightElement(this.clinicName);
        console.log(clinic_name);
        this.clinicName.sendKeys(clinic_name);
        browser.sleep(1000);
    };

    this.enterSpecialisation = function(specialisation){
        highlightElement.highlightElement(this.specialisation);
        //this.specialisation.sendKeys(specialisation);  
        
        browser.actions()
        .mouseMove(this.specialisation.sendKeys(specialisation)).perform().then(function(){
            browser.sleep(4000);
                browser.actions().sendKeys(protractor.Key.DOWN).perform();
                browser.sleep(500);              
            browser.actions().sendKeys(protractor.Key.ENTER).perform();          
        });
    };


    this.enterAddress = function(addr,indexOfSearch){
        highlightElement.highlightElement(this.address);
        browser.actions()
        .mouseMove(this.address.sendKeys(addr)).perform().then(function(){
            browser.sleep(8000);
            for(i=0;i<indexOfSearch;i++){
                browser.actions().sendKeys(protractor.Key.DOWN).perform();
                browser.sleep(500);
            } 
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });
    };


    this.setClinicPhone = function(clinicNumber){
        highlightElement.highlightElement(this.clinicPhone);
        this.clinicPhone.sendKeys(clinicNumber);
        browser.sleep(2000);
    };
};


var ContinueBtn = function(){
    this.continueBtn = element(by.buttonText('continue'));


    this.clickContinueBtn = function(){
        highlightElement.highlightElement(this.continueBtn);
        this.continueBtn.click();
        browser.sleep(2000);
    };
};

module.exports={
    clinic_details1: ClinicDetails,
    clinic_details2: ContinueBtn,
    
}

