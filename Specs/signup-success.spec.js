const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var signUpDetails =require('../SignUp/signup.js');
var otp = require('../OTP/otp.js');
var Chance = require('chance');

var page = new signUpDetails.var1();
var page3 = new signUpDetails.var3();
var otp = new otp.var2();
var chance = new Chance();

console.log('This is for a successful sign up ==================>');

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

describe('Fourth Test for setting the email', ()=> {
    
    
    it('should set the email', ()=> {
        console.log(chance.email({domain: 'gmail.com'}))
        page.setemail(chance.email({domain: 'gmail.com'}));
    });        
});

describe('Fifth test for setting the mobile', ()=> {
    
    it('should set the mobile number', ()=> {
        console.log(chance.phone({ formatted: false }));
        page.setMobileNumber(chance.phone({ formatted: false }));
    });
        
});

describe('Correct Password', ()=> {
    
    it('should be setting the password', ()=> {
        
        page.setPassword("rahulyadav");
    });        
});

describe('Register Button', ()=> {
    
    it('checks if Register Button is Displayed and Enabled', ()=> {
        page3.clickRegisterBtn();
    });            
});


describe('OTP Input Box', ()=> {
    
    it('should check if register button is displayed', ()=> {
        browser.sleep(7000);
        otp.otpDisplayed();
    });
        
});
    