const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var CheckHTTPCode = require('../BaseFunctionsPage/httpGet.js');
var CheckImageLoaded = require('../BaseFunctionsPage/checkImageLoaded.js');
//var CompleteAdminProfile = require('../Profile/fillAdminProfile.js');

//var profile1 = new CompleteAdminProfile.CompleteProfile1();
var checkPageLoaded = function(){

    console.log('Smoke Tests ============>');

    this.checkHTTPCode = function(){
        CheckHTTPCode.httpGet(browser.getCurrentUrl()).then(function(result){
            console.log(result.statusCode);
            expect(result.statusCode).toEqual(200);
            expect(result.statusCode).toEqual(404);
        });
    };

    this.checkPageURL = function(){
        expectedURL = 'https://myswaastherp.sia.co.in/#/home/profile';
        expect(browser.getCurrentUrl()).toEqual(expectedURL);
    };

    this.checkImageLoading = function(){
        console.log('Checks for all image loading');
        CheckImageLoaded.checkforImageLoad();
    };
};

var CheckDivsInPage = function(){

    console.log('Checks for the divs ===============>')
    this.navbar = element(by.css('div.navbar'));
    this.sidebar = element(by.css('nav.cd-side-nav.is-fixed'));
    this.profileSection = element(by.css('div.ui-g-12.ui-md-12.ui-lg-12.heading'));
    this.bodyContainer = element(by.css('div.ui-g-12.body_container'));

    this.checkNavbarDisplayed = function(){
         highlightElement.highlightElement(this.navbar);
         expect(this.navbar.isDisplayed()).toBe(true);
    };

    this.checkSidebarDisplayed = function(){
        highlightElement.highlightElement(this.sidebar);
        expect(this.sidebar.isDisplayed()).toBe(true);
    };

    this.profileSectionDisplayed = function(){
        highlightElement.highlightElement(this.profileSection);
        expect(this.profileSection.isDisplayed()).toBe(true);
    };

    this.bodySectionDisplayed = function(){
        highlightElement.highlightElement(this.bodyContainer);
        expect(this.bodyContainer.isDisplayed()).toBe(true);
    };
};


var assertDataContain = function(){

    this.checkForAdmin = function(adminName){
        browser.getPageSource().then(function(source){
            expect(source).toContain(adminName);
        });
    };

    this.checkForClinic = function(clinicName){
        browser.getPageSource().then(function(source){
            expect(source).toContain(clinicName);
        });
    };
};

var assertProfilePercentage = function(){
    var clinicProgressParent = element(by.xpath('html/body/app-root/div/app-home/div/div/div[2]/profile-app/div/div[2]/div[1]'));
    var getProgressBar = element(by.css('p-progressbar.progress-bar'));
    var doctorProgressParent = element(by.xpath('html/body/app-root/div/app-home/div/div/div[2]/profile-app/div/div[2]/div[2]'));

    this.clinicProgressPercentage = function(){
        clinicProgressParent.element(getProgressBar.locator()).getAttribute('ng-reflect-value').then(function(resultText){
            console.log('The Profile Completion Percentage for Clinic is '+resultText+'%');
            expect(typeof resultText).toBe("string");
            console.log(typeof expect(resultText).toEqual("100"));
            if(resultText ==="100"){
                console.log("Clinic Profile is complete")
            }else{
                console.log("Clinic Profile needs to be completed");
            }
        });
    };


    this.doctorProgressPercentage = function(){
        doctorProgressParent.element(getProgressBar.locator()).getAttribute('ng-reflect-value').then(function(resultText){
            console.log('The Profile Completion Percentage for Admin is '+resultText+'%');
            expect(typeof resultText).toBe('string');
            if(resultText ==="100"){
                console.log('Admin Profile is complete');
            }else{
                console.log('Admin Profile needs to completed');
                //profile1.clickCompleteProfile();
            }
        });
    };
};


module.exports ={
    verfiProfilePage1: checkPageLoaded,
    verifyProfilePage2: CheckDivsInPage,
    verifyProfilePage3: assertDataContain,
    verifyProfilePage4: assertProfilePercentage
}
