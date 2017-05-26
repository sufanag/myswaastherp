var signUpDetails =require('../SignUp/signup.js');
var Chance = require('chance');

var page = new signUpDetails.var1();
var page2 = new signUpDetails.var2();
var page3 = new signUpDetails.var3();

this.email_error = element(by.xpath("//p[contains(text(),'Enter a valid email address.')]"));
this.mobile_error = element(by.xpath("//p[contains(text(),'Mobile no. must contain at least 10 digits.')]"));
this.password_error = element(by.xpath("//p[contains(text(),'Password must contain at least 6 characters.')]"));

this.blank_email_error = element(by.css('p#emailError.error-message'));
this.blank_mobile_error = element(by.css('p#mobileError.error-message'));
this.blank_password_error = element(by.css('p#passwordErrorMsg.error-message'));

//instantize chance for generating a random email or phone number
var chance = new Chance();

describe('First Test For Page Visit', ()=> {

     browser.ignoreSynchronization = true;

    it('should go to the ERP Sign Up Page', ()=> {
        page.visit();
    });
            
});

describe("second test for page maximization",()=>{
    it('should maximize window',()=>{
        browser.driver.manage().window().maximize();
    });
});

describe('Third Test For Setting the Name', ()=> {
    it('should set the username', ()=> {
        page.setUserName("Rahul Yadav");
    });
           
});

describe('Setting Email test -1 ', ()=> {
    
    it('sending a blank email and check for error', ()=> {
        page2.setBlankEmail();
        page3.clickRegisterBtn();
        expect(this.blank_email_error.isDisplayed()).toBe(true);
    });
        
});
  
describe('Setting Email test -2', ()=> {   
    it('should check if error message is displayed when entering email with wrong format', ()=> {       
        page2.setIncorrectEmail('rahul.1');
        page3.clickRegisterBtn();
        expect(this.email_error.isDisplayed()).toBe(true);
    });
        
});

describe('Setting Email test -3', ()=> { 
    it('should set correct email and check none of the error message is displayed', ()=> {
        console.log(chance.email({domain: 'gmail.com'}))
        page.setemail(chance.email({domain: 'gmail.com'}));
        page3.clickRegisterBtn();
        expect(this.email_error.isDisplayed()).toBe(false) || expect(this.blank_email_error.isDisplayed()).toBe(false);
    });        
});

describe('Setting Mobile test -1', ()=> {
    it('should check if the error message is displayed if blank mobile is sent', ()=> {        
        page2.setblankMobile();
        page3.clickRegisterBtn();
        expect(this.blank_mobile_error.isDisplayed()).toBe(true);
    });        
});

describe('Setting Mobile test -2', ()=> {   
    it('should check if the error message is displayed if mobile with incorrect length is set', ()=> {
        page2.setIncorrectMobile(78345);
        page3.clickRegisterBtn();
        expect(this.mobile_error.isDisplayed()).toBe(true);
    });           
});

describe('Setting Mobile test -3', ()=> {
    
    it('should set correct mobile number', ()=> {
        console.log(chance.phone({ formatted: false }));
        page.setMobileNumber(chance.phone({ formatted: false }));
        page3.clickRegisterBtn();
        expect(this.blank_mobile_error.isDisplayed()).toBe(false) || expect(this.mobile_error.isDisplayed()).toBe(false);
    });
        
});    
    
describe('Password test -1', ()=> {
    it('setting blank password and expect that error is displayed', ()=> {
        console.log("Setting Blank Password");
        page2.setBlankPassword();
        page3.clickRegisterBtn();
        expect(this.blank_password_error.isDisplayed()).toBe(true);
    });          
});

describe('Password test -2', ()=> {   
    it('set short password and expect error to be displayed', ()=> {
        page2.setShortPassword();
        page3.clickRegisterBtn();
        expect(this.password_error.isDisplayed()).toBe(true);
    });        
});

describe('Correct Password', ()=> {    
    it('should be setting the password and checking no error is displayed', ()=> {       
        page.setPassword("rahulyadav");
        page3.clickRegisterBtn();
    });        
});
    
describe('Register Button', ()=> {
    
    it('checks if Register Button is Displayed and Enabled', ()=> {
        page3.clickRegisterBtn();
    });        
    
});
    
    
 
    
    
    