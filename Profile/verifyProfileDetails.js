const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var CheckHTTPCode = require('../BaseFunctionsPage/httpGet.js');
var CheckImageLoaded = require('../BaseFunctionsPage/checkImageLoaded.js');
var path = require('path');

var checkPageLoaded = function(){

    console.log('Smoke Tests ============>');

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
            //console.log(typeof expect(resultText).toEqual("100"));
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
                
            }
        });
    };
};


var UpdateClinicInfo= function(){
    console.log('Testing=========>');
    var ParentElement = element(by.xpath('html/body/app-root/div/app-home/div/div/div[2]/profile-app/div/div[2]/div[1]'));
    var childElement = element(by.buttonText('COMPLETE PROFILE'));

    this.clickContinueBtn = function(){
         highlightElement.highlightElement(ParentElement.element(childElement.locator()));
         ParentElement.element(childElement.locator()).click();
    };

    this.getSettingsOptionsForClinic = function(){
        var parentDiv = element(by.css('ul.list'));
        var childList = parentDiv.all(by.tagName('li'));

                    childList.getText().then(function(listings){
                             expect(listings.length).toBe(6);
                            console.log(listings);
        });
    };

    this.getClinicContact = function(){
        var parentDiv = element(by.css('ul.list'));
        var child = element(by.css('[ng-reflect-router-link="clinic-contact"]'));

                    expect(browser.getCurrentUrl()).toEqual('https://myswaastherp.sia.co.in/#/home/profile/c/my-clinic/clinic-contact');
    };

    this.clinicPhotoUpload = function(){
        var ParentElement = element(by.css('div#image1_container.card_img_container.my_clinic_button_container'));
        var childElement = ParentElement.element(by.tagName('img'));

                    childElement.getAttribute('src').then(function(imageLink){
                            console.log(imageLink);
                            if (imageLink==="https://myswaastherp.sia.co.in/assets/images/header_icons/plus_3.png") {
                            fileUploadBtn = ParentElement.element(by.css('[label="update"]'));
                            browser.actions().mouseMove(fileUploadBtn).perform();
                            highlightElement.highlightElement(fileUploadBtn);
                            browser.sleep(2000);
                /*var fileUpload = '/Users/zac01/Downloads/IMG_6211.JPG';
                absolutePath = path.resolve(__dirname,fileUpload);
                console.log(absolutePath);
                fileUploadBtn.sendKeys(absolutePath);
                 browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(20000); */        
                            }else{
                            console.log("Control returned to else block. Can't find element");
                     }
                });
    };

    this.clinicAbout = function(){
        this.aboutClinicElement = element(by.css('[formcontrolname="about_clinic"]'));
        highlightElement.highlightElement(this.aboutClinicElement);
        this.aboutClinicElement.sendKeys('One of the best clinics of the world')
        browser.sleep(2000);

    }

    this.setClinicEmail = function(clinicName){
        this.ClinicEmail = element(by.css('[formcontrolname="email"]'));
        highlightElement.highlightElement(this.ClinicEmail);
        this.ClinicEmail.sendKeys(clinicName + "@"+"myswaastherp.com");
        browser.sleep(2000);
    };

    this.updateClinicContact = function(){
        this.updateBtn = element(by.buttonText('UPDATE'));
        highlightElement.highlightElement(this.updateBtn);
        this.updateBtn.click();
        browser.sleep(5000);
    };
    
};

var ClinicDocuments = function(){
    var parentDiv = element(by.css('ul.list'));

    this.navigateLink = function(){
        var childElement = element(by.css('[ng-reflect-router-link="document-certificates"]'));
        parentDiv.element(childElement.locator()).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://myswaastherp.sia.co.in/#/home/profile/c/my-clinic/document-certificates');
        
    };

    this.getFirstFileDetails = function(){
         var parentUploadDiv = element(by.css('div.ui-g-3.ui-lg-3.ui-md-6.ui-sm-10.cards.left_cards'));
         var getFileName = element(by.css('p.fileName'));
         highlightElement.highlightElement(parentUploadDiv);
          parentUploadDiv.element(getFileName.locator()).getText().then(function(text){
              console.log('The file name is '+text);

          });
    };

    this.getSecondFileDetails = function(){
        var parentUploadDiv = element(by.css('div.ui-g-3.ui-md-6.ui-lg-3.ui-sm-10.cards.center_cards'));
        var getFileName = element(by.css('p.fileName'))
        highlightElement.highlightElement(parentUploadDiv);
         parentUploadDiv.element(getFileName.locator()).getText().then(function(text){
              console.log('The file name is '+text);

          });
    };

    this.getThirdFileDetails = function(){
        var parentUploadDiv = element(by.css('div.ui-g-3.ui-md-6.ui-lg-3.ui-sm-10.cards.right_cards'));
        var getFileName = element(by.css('p.fileName'))
        highlightElement.highlightElement(parentUploadDiv);
         parentUploadDiv.element(getFileName.locator()).getText().then(function(text){
              console.log('The file name is '+text);

          });
    }; 

};

var LocationandPhotos = function(){
    var parentDiv = element(by.css('ul.list'));

    this.navigateLink = function(){
        var childElement = element(by.css('[ng-reflect-router-link="location"]'));
        parentDiv.element(childElement.locator()).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://myswaastherp.sia.co.in/#/home/profile/c/my-clinic/location');
    };

    this.getLocation = function(){
        this.textArea = element(by.css('textarea#autocomplete'));
        highlightElement.highlightElement(this.textArea);
        this.textArea.getText().then(function(text){
            console.log("Clinic's location is "+text);
        });
    };

    this.getScreenshotOfLocation = function(){
        this.googleMapAreaDiv = element(by.css('div.ui-g-12'));
        highlightElement.highlightElement(this.googleMapAreaDiv);
        
    };

    this.updateLocation = function(){
        browser.executeScript('window.scrollTo(0,10000);');
        this.updateBtn = element(by.buttonText('UPDATE'));
        highlightElement.highlightElement(this.updateBtn);
        this.updateBtn.click();
        browser.sleep(5000);
    };

    this.uploadClinicPhotos = function(){
        this.uploadBtn = element(by.css('input#upload-photo'))
        highlightElement.highlightElement(this.uploadBtn);
        //change this file path for the linux or windows upload
        var fileUpload = '/Users/zac01/Downloads/room-medanta.jpg';
        absolutePath = path.resolve(__dirname,fileUpload);
        console.log(absolutePath);
        this.uploadBtn.sendKeys(absolutePath);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(20000);
    };

};

var DoctorList = function(){
    var parentDiv = element(by.css('ul.list'));

    this.navigateLink = function(){
        var childElement = element(by.css('[ng-reflect-router-link="doctors"]'));
        parentDiv.element(childElement.locator()).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://myswaastherp.sia.co.in/#/home/profile/c/my-clinic/doctors');
    };

    this.getDoctorsName = function(){
        this.parentDiv = element(by.css('div.ui-g-12.scheduled'));
        var childElements = this.parentDiv.all(by.css('span.left1'));

             for(i=0;i<=childElements.length;i++){
                   childElements.getText().then(function(childElementText){
                        console.log(childElementText)
            });  
        }
    };

    this.setDoctorTime = function(index){
        this.clickLabel = element(by.css('label.ui-dropdown-label.ui-inputtext.ui-corner-all'));
        highlightElement.highlightElement(this.clickLabel);
        console.log('The index determines which time duration is to be set ' +index);
        switch (index) {
            case 3:
                browser.wait(EC.visibilityOf(this.clickLabel), 5000);
                browser.actions().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
                break;
            case 2:
                browser.wait(EC.visibilityOf(this.clickLabel), 5000);
                browser.actions().sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER).perform();
                break;

            default:
            browser.wait(EC.visibilityOf(this.clickLabel), 5000);
            console.log('Default time selected is 15 minutes');
                break;
        }
        
    };

    this.setCostOfConsultation = function(amount){
        this.cost = element(by.css('[type="number"]'));
        highlightElement.highlightElement(this.cost);
        this.cost.clear();
        this.cost.sendKeys(amount);
        browser.sleep(5000);
    };

    this.updateBtn = function(){
        this.updateButton = element(by.buttonText('update'));
        highlightElement.highlightElement(this.updateButton);
        this.updateButton.click();
        browser.sleep(5000);
    }

};

var setServices = function(){
    var parentDiv = element(by.css('ul.list'));

     this.navigateLink = function(){
        var childElement = element(by.css('[ng-reflect-router-link="service"]'));
        parentDiv.element(childElement.locator()).click();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toBe('https://myswaastherp.sia.co.in/#/home/profile/c/my-clinic/service');
    };

    this.getClinicServices = function(){
        var services = element.all(by.css('div.ui-g-11.ng-untouched.ng-pristine.ng-valid'))
        console.log('There are '+services.length+' procedures in the clinic');
        browser.sleep(5000);

    };

    this.setNewProcedure = function(KeyToEnter){
        this.clickBtn = element(by.css('[ng-reflect-label="+"]'));
        this.clickBtn.click();
        //enters a new Key
        this.some_element = element(by.css('div.ui-g-11.ng-pristine.ng-invalid.ng-touched > div:nth-child(1) > span > p-autocomplete > span > input'));
        this.some_element.click().sendKeys(KeyToEnter);
        this.some_element.sendKeys(protractor.Key.DOWN).sendKeys(protractor.Key.ENTER);
        browser.sleep(5000);
    };

    this.setProcedureAmount = function(AmountToEnter){
        var parentDiv = element(by.css('[ng-reflect-name="1"]'));
        var childElement = element(by.css('[placeholder="₹"]'));
        parentDiv.element(childElement.locator()).sendKeys(AmountToEnter);
        browser.sleep(5000);
    };
};

var goToAdminProfile = function(){

    this.goToProfile = function(){
        this.modalWindow = element(by.css('div#logoutModal'));
    this.modalWindow.click();
    this.editProfileLink = element(by.css('p.link_name'));
    browser.actions().mouseMove(this.editProfileLink).click().perform();
    browser.sleep(5000);

    };

    
};


module.exports ={
    verfiProfilePage1: checkPageLoaded,
    verifyProfilePage2: CheckDivsInPage,
    verifyProfilePage3: assertDataContain,
    verifyProfilePage4: assertProfilePercentage,
    updateClinic : UpdateClinicInfo,
    updateClinicDocs:  ClinicDocuments,
    updateClinicLocation: LocationandPhotos,
    getDoctorList : DoctorList,
    getServicesList: setServices,
    goToAdmin: goToAdminProfile
}
