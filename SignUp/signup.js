const highlightElement =require('../BaseFunctionsPage/highlightelement.js');


console.log("Start of the Sign Up============>");

var signUpDetails = function(){
    this.username = element(by.css('[ng-reflect-name="name"]'));
    this.email = element(by.css('[ng-reflect-name="email_id"]'));
    this.mobileNumber = element(by.css('[ng-reflect-name="mobile"]'));
    this.password = element(by.css('[ng-reflect-name="password"]')); 

    this.visit= function(){
    browser.get('http://myswaastherp.sia.co.in/#/signup');
    };

    console.log("Start of Sign up fields ===========>");
    

    this.setUserName =function(username){
        highlightElement.highlightElement(this.username);
        this.username.clear();
        this.username.sendKeys(username);
        browser.sleep(1000);
    };

    console.log("Start of email==========>");

    this.setemail =function(email){

        console.log("Started with this block=======>");
        highlightElement.highlightElement(this.email);
        this.email.sendKeys(email);
        browser.sleep(1000);
    };

    this.setMobileNumber = function(mobileNumber){
        console.log("Start of Number Block =========>");
        highlightElement.highlightElement(this.mobileNumber);
        this.mobileNumber.sendKeys(mobileNumber);
        browser.sleep(1000);
    };

    this.setShortPassword = function(){
         console.log('Start of Password=========>');
        highlightElement.highlightElement(this.password);
        this.password.sendKeys(password);
        browser.sleep(1000);
        this.password.clear();
    };


    this.setPassword = function(password){
        console.log('Start of Password=========>');
        highlightElement.highlightElement(this.password);
        this.password.sendKeys(password);
        browser.sleep(1000);
    };


};

var signUpError = function(){

    this.email = element(by.css('[ng-reflect-name="email_id"]'));
    this.mobileNumber = element(by.css('[ng-reflect-name="mobile"]'));
    this.password = element(by.css('[ng-reflect-name="password"]'));

    

/*This is the section that sets blank and incorrect emails */
    this.setIncorrectEmail = function(email){
        console.log("Start of Name Block =========>");
        highlightElement.highlightElement(this.email);
        this.email.sendKeys(email);
        browser.sleep(1000);
        this.email.clear();
    };

    this.setBlankEmail = function(){
        console.log("Start of Name Block =========>");
        highlightElement.highlightElement(this.email);
        this.email.sendKeys("r");
        this.email.sendKeys("\b");
        browser.sleep(1000);
          
    };

    /*This is section that sets blank and incorrect mobile number */

    this.setIncorrectMobile = function(mobileNumber){
        console.log("Start of Number Block =========>");
        highlightElement.highlightElement(this.mobileNumber);
        this.mobileNumber.sendKeys(mobileNumber);
        browser.sleep(1000);
        this.mobileNumber.clear();
        
    };


    this.setblankMobile = function(){
        console.log("Start of Number Block =========>");
        highlightElement.highlightElement(this.mobileNumber);
        this.mobileNumber.sendKeys(7);
        this.mobileNumber.sendKeys("\b");
        this.mobileNumber.clear();
    };


     this.setBlankPassword = function(){
        console.log('Start of Password=========>');
        highlightElement.highlightElement(this.password);
        this.password.sendKeys('a');
        this.password.sendKeys("\b");
        browser.sleep(1000);
    };

    this.setShortPassword = function(){
        console.log('Start of Password=========>');
        highlightElement.highlightElement(this.password);
        this.password.sendKeys('abcd');
        browser.sleep(1000);    
    };

};

var registerBtn = function(){
    this.registerbtn = element(by.buttonText('REGISTER'));

this.clickRegisterBtn = function(){
       highlightElement.highlightElement(this.registerbtn);
       //expect(this.registerbtn.isDisplayed()).toBe(true);
       expect(this.registerbtn.isEnabled()).toBe(true);
       this.registerbtn.click();
    }
};


module.exports={
    var1: signUpDetails,
    var2: signUpError,
    var3: registerBtn
}