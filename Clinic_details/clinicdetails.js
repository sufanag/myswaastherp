const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var Chance = require('chance');

console.log("This is start of the clinic details =================>");
var chance = new Chance();

var ClinicDetails = function(){
    this.clinicName  = element(by.css('[formcontrolname="c_name"]'));
    this.specialisation = element(by.css('[ng-reflect-ng-class="ui-inputtext ui-widget ui-stat"]'));
    this.address = element(by.css('[placeholder="Enter your address"]'));
    this.clinicPhone = element(by.css('[ng-reflect-name="mobile"]'));


    this.setclinicName = function(){
        highlightElement.highlightElement(this.clinicName);
        var generate_clinic_name = chance.string({length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'});
        console.log(generate_clinic_name);
        this.clinicName.sendKeys(generate_clinic_name);
        browser.sleep(1000);
    };

    this.enterSpecialisation = function(specialisation,indexOfSearch){
        highlightElement.highlightElement(this.specialisation);
        //this.specialisation.sendKeys(specialisation);  
        
        browser.actions()
        .mouseMove(this.specialisation.sendKeys(specialisation)).perform().then(function(){
            browser.sleep(500);
            for(i=0;i<indexOfSearch;i++){
                browser.actions().sendKeys(protractor.Key.DOWN).perform();
            }
            browser.sleep(500);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();          
        });
    };


    this.enterAddress = function(addr,indexOfSearch){
        highlightElement.highlightElement(this.address);
        browser.actions()
        .mouseMove(this.address.sendKeys(addr)).perform().then(function(){
            browser.sleep(500);
            for(i=0;i<indexOfSearch;i++){
                browser.actions().sendKeys(protractor.Key.DOWN).perform();
            }
            browser.sleep(500);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });
    };
};

module.exports={
    clinic_details1: ClinicDetails  
}