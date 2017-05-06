var signUpDetails =require('../SignUp/signup.js');
var Chance = require('chance');

var page = new signUpDetails.var1();
var page2 = new signUpDetails.var2();
var page3 = new signUpDetails.var3();

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

describe('Blank Email ', ()=> {
    
    it('sending a blank email and checking for error', ()=> {
        page2.setBlankEmail()
    });
        
});
  
describe('Incorrect email entered', ()=> {
    
    it('should check if error message is displayed', ()=> {
        
        page2.setIncorrectEmail('rahul.1');
    });
        
});

describe('Fourth Test for setting the email', ()=> {
    
    
    it('should set the email', ()=> {
        console.log(chance.email({domain: 'gmail.com'}))
        page.setemail(chance.email({domain: 'gmail.com'}));
    });        
});

describe('Blank Mobile', ()=> {

    it('should check if the error message is displayed if blank mobile is sent', ()=> {        
        page2.setblankMobile();
    });
        
});


describe('Incorrect Mobile', ()=> {
    
    it('should check if the error message is displayed if incorect password is sent', function() {
        page2.setIncorrectMobile(78345);
    });
            
});

describe('Fifth test for setting the mobile', ()=> {
    
    it('should set the mobile number', ()=> {
        console.log(chance.phone({ formatted: false }));
        page.setMobileNumber(chance.phone({ formatted: false }));
    });
        
});    
    
describe('Blank Password', ()=> {
    
    it('setting blank password', function() {
        console.log("Setting Blank Password");
        page2.setBlankPassword();
    });       
    
});

describe('Short Password', ()=> {
    
    it('setting short password', ()=> {
        page2.setShortPassword();
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
    
    
 
    
    
    