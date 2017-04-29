var signUpOthersHeaders =require('../SignUp/signup-other.js');

var page = new signUpOthersHeaders.var1();
var page2 = new signUpOthersHeaders.var2();
var page3 = new signUpOthersHeaders.var3();



describe('Open the page', ()=> {
     browser.ignoreSynchronization = true;
    
    it('should open the browser', ()=> {
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
        page.logoDisplayed();
    });         
});


describe('Header bar is displayed', ()=> {
    it('should highlight the header bar', ()=> {
        page.headerBar();
    });       
});


describe('Login Link is displayed and clicked', ()=> {
    
    it('should check if Login is displayed and if it goes to Login route', ()=> {
        page.loginLink();
    });        
});



describe('Paragraph text is displayed', ()=> {
    
    it('should check if paragraph heading is displayed and print to console', ()=> {
        page2.leftHeadingDisplayed();
    });
        
});



describe('Paragraph 2 is displayed', ()=> {
    
    it('should check if paragraph heading part 2 is displayed ', function() {
        page2.leftBelowHeadingDisplayed();
        
    });
        
});


describe('Tour Button ', ()=> {
    
    it('should check if tour button is displayed', ()=> {
        page3.tourBtnDisplayed();
    });
        
});
    
    
    
    
    