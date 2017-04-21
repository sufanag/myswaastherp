var signUpDetails =require('../SignUp/signup.js');

var page = new signUpDetails.var1();
var page2 = new signUpDetails.var2();

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
        page.setemail('ydv.rahul10@gmail.com');
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
        page.setMobileNumber(7836885839);
    });
        
});    
    

/*








describe('Sixth test for setting the password', ()=> {
    
    
    it('should be setting the password', ()=> {
        page.setPassword("rahulyadav");
    });
        
});
   
 */   
    
    
    