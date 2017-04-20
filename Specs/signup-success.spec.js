var signUpDetails =require('../SignUp/signup.js');

var page = new signUpDetails();


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
        page.setemail('ydv.rahul10@gmail.com');
    });
        
});



describe('Fifth test for setting the mobile', ()=> {
    
    
    it('should set the mobile number', ()=> {
        page.setMobileNumber(7836885839);
    });
        
});



describe('Sixth test for setting the password', ()=> {
    
    
    it('should be setting the password', ()=> {
        page.setPassword("rahulyadav");
    });
        
});
   
    
    
    
    