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


    this.setPassword = function(password){
        console.log('Start of Password=========>');
        highlightElement.highlightElement(this.password);
        this.password.sendKeys(password);
        browser.sleep(1000);
    };


};


module.exports=signUpDetails;