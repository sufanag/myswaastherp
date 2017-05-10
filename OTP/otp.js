const highlightElement =require('../BaseFunctionsPage/highlightelement.js');

console.log("This is start of OTP Section ===================>");

var OTPHeader = function(){
    this.header_text = element(by.css('div.content-div'));
    this.heading_text = element(by.css('p.heading-top'));
    this.heading_first = element(by.xpath("//div[@class='ui-g-12 heading-container']/p[1]"));
    this.heading_second = element(by.xpath("//div[@class='ui-g-12 heading-container']/p[2]"));

    this.phone_number = element(by.xpath("//p[@class='top-content']/a"));


    this.headerDisplayed = function(){
        highlightElement.highlightElement(this.header_text); 
        expect(this.header_text.isDisplayed()).toBe(true);
    };

    this.headerText = function(){
        highlightElement.highlightElement(this.heading_text); 
        expect(this.heading_text.isDisplayed()).toBe(true);
    };

    this.headingTextAgain = function(){
         highlightElement.highlightElement(this.heading_first); 
        expect(this.heading_first.isDisplayed()).toBe(true);
    };

    this.headerText2 = function(){
        highlightElement.highlightElement(this.heading_second); 
        expect(this.heading_second.isDisplayed()).toBe(true);
    };

};


var OTPInputBox = function(){
    this.otpinput = element(by.css('[formcontrolname="otp"]'));
    this.error_message = element(by.xpath("//p[contains(text(),'Minimum 6-digit . ')]"));


    this.otpDisplayed = function(){
        this.otpinput.click();
        highlightElement.highlightElement(this.otpinput);
        expect(this.otpinput.isDisplayed()).toBe(true);
        browser.sleep(2000);
    };

    this.otpEnter = function(otpNumber){
        this.otpinput.click();
        highlightElement.highlightElement(this.otpinput);
        this.otpinput.sendKeys(otpNumber);
        browser.sleep(2000);
    };
};


var resendOTP = function(){
    this.privacy = element(by.css('p.privacy-terms'));
    this.resendOTP = element(by.css('p.privacy-terms > a[1]'));
    this.getViaCall = element(by.css('p.privacy-terms > a[2]'));


};

var verifyBtn = function(){
    this.registerBtn = element(by.buttonText("VERIFY"));

    this.clickVerify = function(){
         highlightElement.highlightElement(this.registerBtn);
         this.registerBtn.click();
         browser.sleep(2000);
    };
};


module.exports={
    var1: OTPHeader,
    var2: OTPInputBox,
    var3: verifyBtn
};