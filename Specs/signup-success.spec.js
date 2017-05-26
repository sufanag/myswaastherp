const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var signUpDetails =require('../SignUp/signup.js');
var signUpOthersHeaders =require('../SignUp/signup-other.js');
var otp = require('../OTP/otp.js');
var CompleteProfile = require('../Complete_Profile/complete-profile.js');
var ClinicDetails = require('../Clinic_details/clinicdetails.js');
var FileUpload = require('../FileUpload/fileupload.js');
var Verification = require('../VerificationPage/verificationpage.js')
var Chance = require('chance');



var page = new signUpDetails.var1();
var page3 = new signUpDetails.var3();

var pageOthers1 = new signUpOthersHeaders.var1();
var pageOthers2 = new signUpOthersHeaders.var2();
var pageOthers3 = new signUpOthersHeaders.var3();
var pageOthers4 = new signUpOthersHeaders.var4();
var pageOthers5 = new signUpOthersHeaders.var5();

var otp1 = new otp.var2();
var otp2 = new otp.var3();

var completeProfileUpdate = new CompleteProfile.export1();
var continueBtn = new CompleteProfile.export3();

var EnterClinicDetails = new ClinicDetails.clinic_details1();
var EnterClinicDetails2 = new ClinicDetails.clinic_details2();
var _clinic_name =  ClinicDetails.clinic_name;

var FileUp1 = new FileUpload.fileUpload1();
var FileUp2 = new FileUpload.fileUpload2();
var FileUp3 = new FileUpload.fileUpload3();
var FileCont = new FileUpload.fileUploadContinue();

var Verification_Page = new Verification.verificationURL();
var Logged_out = new Verification.loggingOut();

//================Chance Details==========================
var chance = new Chance();

var email = (chance.email({domain:'gmail.com'}));
console.log(email);
exports.userEmail = email;

var mobile = (chance.phone({formatted:false}));
console.log(mobile);
exports.phoneNumber = mobile;

var specialisation = chance.string({length: 1, pool: 'ACDEFGHIMNOPRSTUV'});
console.log(specialisation);

var indexSearch = chance.integer({min: 1, max: 3});
console.log(indexSearch);

var addr_key = chance.string({length: 1, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'});
console.log(addr_key);

var generate_clinic_name = chance.string({length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'});
console.log(generate_clinic_name);

var otpNumber;


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

//this section checks for the other UI parameters
console.log("Start of the other UI tests============>");

describe('Logo of MySwaasth is displayed', ()=> {
    it('MySwaasth Logo is displayed', ()=> {
        pageOthers1.logoDisplayed();
    });         
});

describe('Header bar is displayed', ()=> {
    it('should highlight the header bar', ()=> {
        pageOthers1.headerBar();
    });       
});

describe('Paragraph text is displayed', ()=> {
    
    it('should check if paragraph heading is displayed and print to console', ()=> {
        pageOthers2.leftHeadingDisplayed();
    });
        
});

describe('Paragraph 2 is displayed', ()=> {
    
    it('should check if paragraph heading part 2 is displayed ', ()=> {
        pageOthers2.leftBelowHeadingDisplayed();
        
    });
        
});

describe('Tour Button ', ()=> {
    
    it('should check if tour button is displayed', ()=> {
        pageOthers3.tourBtnDisplayed();
    });
        
});

describe('Content Heading', ()=> {
    
    it('checks if content header is displayed', ()=> {
        pageOthers4.headingTopDisplayed();
    });
    
    it('checks if the content header part 1 is displayed', ()=> {
        pageOthers4.contentDisplayed1();
    });
    
    it('checks if the content header part 2 is displayed', ()=> {
        pageOthers4.contentDisplayed2();
    });     
        
});

describe('Privacy Section', ()=> {
    
    it('Privacy section is displayed', ()=> {
        pageOthers5.privacyDisplayed();
    });        
});

//this section starts with input parameters

describe('Third Test For Setting the Name', ()=> {

    
    it('should set the username', ()=> {
        page.setUserName("Rahul Yadav");
    });
           
});

describe('Fourth Test for setting the email', ()=> {
    
    
    it('should set the email', ()=> {
        page.setemail(email);
    });        
});

describe('Fifth test for setting the mobile', ()=> {
    
    it('should set the mobile number', ()=> {
        page.setMobileNumber(mobile);
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
        otp1.otpDisplayed();
    });
        
});



describe('Go to Mahaflox', ()=> {
    
    it('opening a new window and get OTP', function() {      
       
        browser.executeScript('window.open()').then(function () {
        browser.getAllWindowHandles().then(function (handles) {
            var secondWindow = handles[1];
            browser.ignoreSynchronization = true;
            browser.switchTo().window(secondWindow).then(function () {
                browser.get('http://apiv4.sia.co.in/mahaflox');
                browser.sleep(2000);
                element(by.css('input#id_username')).sendKeys('admin@innotical.com');
                element(by.css('input#id_password')).sendKeys('admin_inno111');
                element(by.xpath('//input[@value="Log in"]')).click();
                browser.sleep(2000);
                element(by.xpath('//tr[@class="model-account"]/th/a')).click();
                element(by.css('input#searchbar')).sendKeys(email);
                element(by.xpath('//input[@value="Search"]')).click();
                browser.sleep(2000);
                
                element(by.xpath('//th[@class="field-email"]/a')).click();
                browser.sleep(2000);
                
              element(by.css('input#id_random.vIntegerField')).getAttribute('value').then(function(text){
                    otpNumber = text;
                    console.log(otpNumber);
                });     
                var firstWindow = handles[0]
                browser.switchTo().window(firstWindow).then(function () {
                console.log("Returning back");
             });
     });             
    });
    });
    });     
});


describe('Entering the OTP', ()=> {
    
    it('Entering the OTP', function() {
        otp1.otpEnter(otpNumber);
    });            
});


describe('Finish Entering OTP', ()=> {
    
    it('finishing entering the OTP', ()=> {
        otp2.clickVerify();
    });
        
});

/*
describe('Verify User Email', ()=> {
    
    it('checking user email is same', ()=> {
        completeProfileUpdate.verifyUserEmail();
    });
        
});
 */

describe('Continue signing in', ()=> {  
    it('should click on continue button', ()=> {
       continueBtn.clickContinueBtn(); 
    });
});


describe('Clinic Name', ()=> {
        
    it('enters the clinic name', ()=> {
        EnterClinicDetails.setclinicName(generate_clinic_name);
    });
       
});


describe('Enter specialisation', ()=> {    
    it('enter the specialisation', function() {
        EnterClinicDetails.enterSpecialisation(specialisation);
    });       
});

describe('Set Address', ()=> { 
    it('enters an address', ()=> {
        EnterClinicDetails.enterAddress(addr_key,indexSearch);
    });        
});


describe('Clinic Phone', ()=> {
    it('set clinic phone number', ()=> {
        EnterClinicDetails.setClinicPhone(mobile);
    });      
});

describe('Continue', ()=> {
    
    it('clicking on continue button', ()=> {
        EnterClinicDetails2.clickContinueBtn();
    });
        
});


describe('File Upload 1', ()=> {    
    it('first file upload', ()=> {
        FileUp1.fileUploadFirst();
    });        
});


describe('File Upload 2', ()=> {   
    it('second file upload', ()=> {
        FileUp2.fileUploadSecond();
    });       
});


describe('File Upload 3', ()=> {
    
    it('uploads third document', ()=> {
        FileUp3.fileUploadThird();
    });
        
});


describe('Continue to next step', ()=> {
    
    it('by clicking on continue button', ()=> {
        FileCont.clickOnContinue();
    });
        
});


describe('Verification URL', ()=> {
    
    it('will verify the URL of verification page', ()=> {
        Verification_Page.verifyURL();
    });
        
});


describe('Verification Heading', ()=> { 
    it('should match the verification heading text', ()=> {
        Verification_Page.verificationHeadingVerify();
    });        
});

describe('Verification Content', ()=> {
    it('should print some stuff', ()=> {
        Verification_Page.verificationOfContent();
    });       
});


describe('Logout Button', ()=> {
    
    it('clicks on Logout Button', ()=> {
        Logged_out.clickLogoutBtn();
    });

    
    it('is logged out', ()=> {
        Logged_out.verifyLoggedOut();
    });
        
        
});


describe('Go to Mahaflox again', ()=> {
    
    it('should go to mahaflox again', ()=> {
        browser.executeScript('window.open').then(function(){
             browser.getAllWindowHandles().then(function(handles){
                 var secondWindow = handles[1];
                 browser.switchTo().window(secondWindow).then(function(){
                      browser.get('http://apiv4.sia.co.in/mahaflox');
                      browser.sleep(1000);
                      element(by.xpath('//tr[@class="model-main_facilities"]/th/a')).click();
                      console.log(generate_clinic_name);
                      var elem =element(by.xpath("//a[contains(text(),generate_clinic_name)]"));
                      elem.click();
                      browser.sleep(1000);

                 });
             });
        });
    });
        
});
    
    
    
    



    
    

    
    


    

    

    
    




 
    
    
    

    
    