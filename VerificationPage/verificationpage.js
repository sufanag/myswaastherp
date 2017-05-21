const highlightElement =require('../BaseFunctionsPage/highlightelement.js');


var verificationHeading = function(){
    var url = 'https://myswaastherp.sia.co.in/#/verification';
    this.verificationHeading = element(by.css('p.heading'));
    this.verificationContent = element(by.xpath('//div[contains(@class,"content_section")]/p'));


    this.verifyURL = function(){
        expect(browser.getCurrentUrl()).toEqual(url);
        browser.sleep(1000);
    };

    this.verificationHeadingVerify = function(){
        highlightElement.highlightElement(this.verificationHeading);
        this.verificationHeading.getText().then(function(text){
            console.log(text);
            var textToVerify ='Verification Pending';
            expect(text).toEqual(textToVerify);
        });
    };


    this.verificationOfContent = function(){
        highlightElement.highlightElement(this.verificationContent);
        this.verificationContent.getText().then(function(text){
            console.log(text);
        });
    };
};


var LogoutVerify = function(){
    this.logoutBtn = element(by.buttonText('Logout'));
    var loggedOuturl = 'https://myswaastherp.sia.co.in/#/login';


    this.clickLogoutBtn = function(){
        highlightElement.highlightElement(this.logoutBtn);
        this.logoutBtn.click();
        browser.sleep(2000);
    };

    this.verifyLoggedOut = function(){
        expect(browser.getCurrentUrl()).toEqual(loggedOuturl);
        browser.sleep(1000);
    }
};


module.exports={
    verificationURL:verificationHeading,
    loggingOut:LogoutVerify
}