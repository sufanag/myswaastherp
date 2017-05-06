var signUpOthersHeaders =require('../SignUp/signup-other.js');

var page = new signUpOthersHeaders.var1();
var page2 = new signUpOthersHeaders.var2();
var page3 = new signUpOthersHeaders.var3();
var page4 = new signUpOthersHeaders.var4();
var page5 = new signUpOthersHeaders.var5();


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


describe('Paragraph text is displayed', ()=> {
    
    it('should check if paragraph heading is displayed and print to console', ()=> {
        page2.leftHeadingDisplayed();
    });
        
});


describe('Paragraph 2 is displayed', ()=> {
    
    it('should check if paragraph heading part 2 is displayed ', ()=> {
        page2.leftBelowHeadingDisplayed();
        
    });
        
});


describe('Tour Button ', ()=> {
    
    it('should check if tour button is displayed', ()=> {
        page3.tourBtnDisplayed();
    });
        
});

describe('Content Heading', ()=> {
    
    it('checks if content header is displayed', ()=> {
        page4.headingTopDisplayed();
    });
    
    it('checks if the content header part 1 is displayed', ()=> {
        page4.contentDisplayed1();
    });
    
    it('checks if the content header part 2 is displayed', ()=> {
        page4.contentDisplayed2();
    });     
        
});

describe('Privacy Section', ()=> {
    
    it('Privacy section is displayed', ()=> {
        page5.privacyDisplayed();
    });        
});
    

console.log("Routes to Login Page=================================================>")

describe('Login Link is displayed and clicked', ()=> {
    
    it('should check if Login is displayed and if it goes to Login route', ()=> {
        page.loginLink();
    });        
});
    
    
    
    
    
    