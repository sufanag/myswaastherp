const highlightElement =require('../BaseFunctionsPage/highlightelement.js');

var loginFunction = function(){
    this.emailfield = element(by.css('[ng-reflect-name="email"]'));
    this.passwordfield = element(by.css('[formcontrolname="password"]'));
    this.btn = element(by.buttonText("SIGN IN"));

    this.verifyLoginUrl = function(){
        login_url = 'https://myswaastherp.sia.co.in/#/login';
        var url = browser.getCurrentUrl();
        expect(url).toEqual(login_url);
    };

    this.getLoginEmail = function(emailId){
        highlightElement.highlightElement(this.emailfield);
        this.emailfield.sendKeys(emailId);
        browser.sleep(2000);
    };

    this.sendPassword = function(str_pass){
        highlightElement.highlightElement(this.passwordfield);
        this.passwordfield.sendKeys(str_pass);
        browser.sleep(2000);
    };


    this.clickButton = function(){
        highlightElement.highlightElement(this.btn);
        this.btn.click();
        browser.sleep(2000);
    }
};


module.exports={
    LoginVer1: loginFunction
}