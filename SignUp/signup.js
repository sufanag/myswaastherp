const highlightElement =require('../BaseFunctionsPage/highlightelement.js');

console.log("Start of the Sign Up============>");

var signUpDetails = function(){
    this.username = element(by.css('[ng-reflect-name="name"]'));
    this.email = element(by.css('[ng-reflect-name="email_id"]'));
    this.mobileNumber = element(by.css('[ng-reflect-name="mobile"]'));
    this.password = element(by.css('[ng-reflect-name="password"]'));

    this.email_error = element(by.xpath("//p[contains(text(),'Invalid email')]"));
    this.mobile_error = element(by.xpath("//p[contains(text(),'Invalid number')]"));
    this.password_error = element(by.xpath("//p[contains(text(),'Minimum 6-character')]"));

    this.blank_email_error = element(by.xpath("//p[contains(text(),'Email is required.')]"));
    this.blank_mobile_error = element(by.xpath("//p[contains(text(),'Mobile No. is required.')]"));
    this.blank_password_error = element(by.xpath("//p[contains(text(),'Password is required.')]"));
    

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

    this.email_error = element(by.xpath("//p[contains(text(),'Invalid email')]"));
    this.mobile_error = element(by.xpath("//p[contains(text(),'Invalid number')]"));
    this.password_error = element(by.xpath("//p[contains(text(),'Minimum 6-character')]"));

    this.blank_email_error = element(by.xpath("//p[contains(text(),'Email is required. ')]"));
    this.blank_mobile_error = element(by.xpath("//p[contains(text(),'Mobile No. is required. ')]"));
    this.blank_password_error = element(by.xpath("//p[contains(text(),'Password is required. ')]"));

/*This is the section that sets blank and incorrect emails */
    this.setIncorrectEmail = function(email){
        console.log("Start of Name Block =========>");
        highlightElement.highlightElement(this.email);
        this.email.sendKeys(email);
        browser.sleep(1000);
        expect(this.email_error.isDisplayed()).toBe(true);
        this.email.clear();
    };

    this.setBlankEmail = function(){
        console.log("Start of Name Block =========>");
        highlightElement.highlightElement(this.email);
        this.email.sendKeys("r");
        this.email.sendKeys("\b");
        expect(this.blank_email_error.isDisplayed()).toBe(true);
        browser.sleep(1000);
          
    };

    /*This is section that sets blank and incorrect mobile number */

    this.setIncorrectMobile = function(mobileNumber){
        console.log("Start of Number Block =========>");
        highlightElement.highlightElement(this.mobileNumber);
        this.mobileNumber.sendKeys(mobileNumber);
        browser.sleep(1000);
        expect(this.mobile_error.isDisplayed()).toBe(true);
        this.mobileNumber.clear();
        
    };


    this.setblankMobile = function(){
        console.log("Start of Number Block =========>");
        highlightElement.highlightElement(this.mobileNumber);
        this.mobileNumber.sendKeys(7);
        this.mobileNumber.sendKeys("\b");
        expect(this.blank_mobile_error.isDisplayed()).toBe(true);
        this.mobileNumber.clear();
    };


     this.setIncorrectPassword = function(){
        console.log('Start of Password=========>');
        highlightElement.highlightElement(this.password);
        this.password.sendKeys(password);
        browser.sleep(1000);
        expect(this.password_error.isDisplayed()).toBe(true);
        this.password.clear();
    };
    


};


module.exports={
    var1: signUpDetails,
    var2: signUpError
}