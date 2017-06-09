const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var signUpDetails =require('../SignUp/signup.js');
var signUpOthersHeaders =require('../SignUp/signup-other.js');
var otp = require('../OTP/otp.js');
var CompleteProfile = require('../Complete_Profile/complete-profile.js');
var ClinicDetails = require('../Clinic_details/clinicdetails.js');
var FileUpload = require('../FileUpload/fileupload.js');
var Verification = require('../VerificationPage/verificationpage.js');
var Login = require('../Login/login.js');
var TimeSet = require('../TimeSet/timeset.js')
var AddStaff = require('../AddStaff/addStaff.js');
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

var LoginModule1 = new Login.LoginVer1();

var SettingTime = new TimeSet.HeadingText1();

var SettingStaff = new AddStaff.addStaff1();
var SettingStaff2 = new AddStaff.addStaff2();
var SettingStaff3 = new AddStaff.addStaff3();
var SettingStaff4 = new AddStaff.addStaff4();

//==========================================Chance Details================================================
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

//===============================================Start of Specs=============================================

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

describe('Logo', ()=> {
    it('MySwaasth Logo is displayed', ()=> {
        pageOthers1.logoDisplayed();
    });         
});

describe('Header Bar', ()=> {
    it('should highlight the header bar', ()=> {
        pageOthers1.headerBar();
    });       
});

describe('Paragraph text', ()=> {
    
    it('should check if paragraph heading is displayed and print to console', ()=> {
        pageOthers2.leftHeadingDisplayed();
    });
        
});

describe('Paragraph 2', ()=> {
    
    it('should check if paragraph heading part 2 is displayed ', ()=> {
        pageOthers2.leftBelowHeadingDisplayed();
        
    });
        
});

describe('Tour Button', ()=> {
    
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

describe('Setting the Name', ()=> {

    
    it('should set the username', ()=> {
        page.setUserName("Rahul Yadav");
    });
           
});

describe('Setting the email', ()=> {
    
    
    it('should set the email', ()=> {
        page.setemail(email);
    });        
});

describe('Setting the mobile', ()=> {
    
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


describe('OTP', ()=> {
    
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

describe('Sign Back In', ()=> {  
    it('should click on continue button', ()=> {
       continueBtn.clickContinueBtn(); 
    });
});


describe('Clinic Name', ()=> {
        
    it('enters the clinic name', ()=> {
        EnterClinicDetails.setclinicName(generate_clinic_name);
    });
       
});


describe('Specialisation', ()=> {    
    it('enter the specialisation', function() {
        EnterClinicDetails.enterSpecialisation(specialisation);
    });       
});

describe('Address', ()=> { 
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


describe('Next Step', ()=> {
    
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


describe('Document Verification', ()=> { 
    it('should go to mahaflox again, and click on Document Verified for the clinic created', ()=> {
        browser.executeScript('window.open').then(function(){
             browser.getAllWindowHandles().then(function(handles){
                 var secondWindow = handles[1];
                 browser.switchTo().window(secondWindow).then(function(){
                      browser.get('http://apiv4.sia.co.in/mahaflox');
                      browser.sleep(1000);
                      element(by.xpath('//tr[@class="model-main_facilities"]/th/a')).click();
                      console.log(generate_clinic_name);
                      //var elem =element(by.xpath("//a[contains(text(),generate_clinic_name)]"));
                      var ele = element(by.cssContainingText('a',generate_clinic_name));
                      ele.click();
                      browser.sleep(2000);
                      var elem_chkbox = element(by.css('input#id_doc_verifieds')).click();
                      var save_btn = element(by.name('_save'));
                      save_btn.click();
                      browser.sleep(2000);
                      var firstWindow = handles[0];
                      browser.switchTo().window(firstWindow).then(function(url){
                          url = browser.getCurrentUrl();
                          console.log(url);
                      });
                      browser.sleep(2000);
                 });
             });
        });
    });
        
});


describe('Login back', ()=> {
   
   it('verify user is on the Login page', ()=> {
       LoginModule1.verifyLoginUrl();
   });

   
   it('sets the username for login', ()=> {
       LoginModule1.getLoginEmail(email);
   });

   
   it('sets the password for login', ()=> {
       LoginModule1.sendPassword("rahulyadav");
   });

   
   it('clicks on Sign In Button', ()=> {
       LoginModule1.clickButton();
   });
       
                  
});
    

describe('Setting Time', ()=> {    
    it('should check the heading text on Time Page', ()=> {
        SettingTime.checkHeadingText();
    });       
});


describe('Next', ()=> {
    
    it('should click on Next Button', ()=> {
        SettingTime.clickNextBtn();
    });
        
});


describe('Add Staff Heading', ()=> {
    
    it('should verify the Add Staff heading text', ()=> {
        SettingStaff.verifyHeadingText();
    });
        
});


describe('Set Doctors', ()=> {
    
    it('should select whether owner is a doctor or not and then add doctors based on that', ()=> {
        SettingStaff2.setUpDoctors();
    });
        
});


describe('Set Staff', ()=> {   
    it('setting staff details with name and other details', ()=> {
        SettingStaff3.setStaffName();
        SettingStaff3.setStaffEmail();
        SettingStaff3.setStaffMobile();

    });
 
    it('should click on NEXT button', ()=> {
        SettingStaff4.acceptStaff();
    });
               
});

    
    
    

    
    
    
    
    
    



    
    

    
    


    

    

    
    




 
    
    
    

    
    