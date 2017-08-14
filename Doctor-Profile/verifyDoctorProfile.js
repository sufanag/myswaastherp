const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var path = require('path');



var checkDoctorProfile = function(){
    var ParentElement = element(by.xpath('html/body/app-root/div/app-home/div/div/div[2]/profile-app/div/div[2]/div[2]'));
    var childElement = element(by.buttonText('COMPLETE PROFILE'));

    this.checkPageURL = function(){
        expectedURL = 'https://myswaastherp.sia.co.in/#/home/profile';
        expect(browser.getCurrentUrl()).toEqual(expectedURL);
    };

    console.log('Testing=========>');
    

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

};

var setPersonalDetails = function(indexToEnter){
   
   this.setPersonPrefix = function(){
       this.setProfixDropDown = element(by.cssContainingText('.ui-corner-all','Select prefix'));
        highlightElement.highlightElement(this.setProfixDropDown);   
       this.setProfixDropDown.click();
       var desiredOption = this.setProfixDropDown.all(by.tagName('li')).get(2);
       browser.wait(EC.visibilityOf(desiredOption), 5000);
       desiredOption.click();

   };

   this.getPersonName = function(NameOfDoctor){
       this.doctorName = element(by.css(['formcontrolname="full_name"']));
       highlightElement.highlightElement(this.doctorName);  
      
   };

   this.setGenderOfDoctor = function(indexToEnter){
       this.setDoctorGender = element(by.cssContainingText('.ui-corner-all','Select gender'));
       highlightElement.highlightElement(this.setDoctorGender);
       this.setDoctorGender.click();
       console.log(indexToEnter);
       var desiredOption = this.setDoctorGender.all(by.tagName('li')).get(indexToEnter);
       browser.wait(EC.visibilityOf(desiredOption), 5000);
       desiredOption.click();
   };

   this.setExperience = function(){
       this.setExp = element(by.css('[formcontrolname="yearofexp"]'));
       highlightElement.highlightElement(this.setExp);
       this.setExp.sendKeys(12);
       browser.sleep(5000);
   };

   this.aboutDoctor = function(){
       this.setExp = element(by.css('[formcontrolname="additional_info"]'));
       highlightElement.highlightElement(this.setExp);
       this.setExp.sendKeys('Graduated from AIIMS. Is a very capable doctor');
       browser.sleep(5000);
   };

   this.updateBtn = function(){

       this.updateBtn = element(by.buttonText('Update'));
       highlightElement.highlightElement(this.updateBtn);
       this.updateBtn.click();
       browser.sleep(5000);

   }
};

var setEducationAndSpecialisation = function(){
    var parentDiv = element(by.css('ul.list'));

    this.navigateLink = function(){
        var childElement = element(by.css('[ng-reflect-router-link="education-specialization"]'));
        parentDiv.element(childElement.locator()).click();
        browser.sleep(5000);
    };

    this.setDegreeOfDoctor = function(keyToEnter){
        var ParentElement = element(by.css('[formcontrolname="qualification"]'));
        var setDoctorDegree = element(by.css('input.ui-inputtext.ui-widget.ui-state-default.ui-corner-all'));
        highlightElement.highlightElement(ParentElement.element(setDoctorDegree.locator())); 
        browser.actions()
        .mouseMove(ParentElement.element(setDoctorDegree.locator()).sendKeys(keyToEnter))
        .perform().then(function(){
                browser.sleep(4000);
                browser.actions().sendKeys(protractor.Key.DOWN).perform();
                browser.sleep(1000);              
                browser.actions().sendKeys(protractor.Key.ENTER).perform();          
        });
    };

    this.setCollegeDoctor = function(){
        this.degree = element(by.css('[formcontrolname="college"]'));
        highlightElement.highlightElement(this.degree);
        this.degree.sendKeys('AIIMS');
        browser.sleep(2000);

    };

    this.passoutYear = function(indexToEnter){
       this.passoutyear = element(by.cssContainingText('.ui-corner-all','Select year'));
       highlightElement.highlightElement(this.passoutyear);
       this.passoutyear.click();
       console.log(indexToEnter);
       var desiredOption = this.passoutyear.all(by.tagName('li')).get(indexToEnter);
       browser.wait(EC.visibilityOf(desiredOption), 5000);
       desiredOption.click();
   };

   this.addEducation = function(){
       this.addEducationDetails = element(by.buttonText('SAVE & ADD MORE'));
       highlightElement.highlightElement(this.addEducationDetails);
       this.addEducationDetails.click();
       browser.sleep(5000);
   }

};

var registration_and_documents = function(){
 var parentDiv = element(by.css('ul.list'));

    this.navigateLink = function(){
        var childElement = element(by.css('[ng-reflect-router-link="registration-document"]'));
        parentDiv.element(childElement.locator()).click();
        browser.sleep(5000);
    };

    this.setCouncilName = function(){
        this.addCouncilName = element(by.css('[formcontrolname="name"]'));
        highlightElement.highlightElement(this.addCouncilName);
        this.addCouncilName.sendKeys('Indian Medical Council');
        browser.sleep(5000);    
        };

    this.selectYear = function(indexToEnter){
        this.councilYear = element(by.cssContainingText('.ui-corner-all','Select year'));
        highlightElement.highlightElement(this.councilYear);
        this.councilYear.click();
        console.log(indexToEnter);
        var desiredOption = this.councilYear.all(by.tagName('li')).get(indexToEnter);
        browser.wait(EC.visibilityOf(desiredOption), 5000);
        desiredOption.click();
        
    };

    this.document_upload = function(){
        var set_name =['Id_Proof','Registration_proof','College_marksheet','Passing_certificate'];
        var item = items[Math.floor(Math.random()*set_name.length)];

        this.documentName = element(by.css('input.ui-inputtext ui-corner-all ui-state-default ui-widget ng-valid ng-touched ng-dirty'));
        this.documentName.sendKeys(item);

        this.fileUploadBtn = element(by.css('ui-inputtext ui-corner-all ui-state-default ui-widget ng-pristine ng-valid ng-touched'))
        this.fileUploadLink = element(by.xpath("//span[contains(text(),'+Add Document')]"));
        highlightElement.highlightElement(this.fileUploadLink);

        var fileUpload = '/Users/zac01/Downloads/Images/Screenshot 2017-02-04 21.52.15.png';

        absolutePath = path.resolve(__dirname,fileUpload);
        console.log(absolutePath);
        this.fileUploadBtn.sendKeys(absolutePath);
        this.fileUploadLink.click();
        browser.sleep(20000);
    };
};

module.exports={
    checkProfileDoctor: checkDoctorProfile,
    PersonalDetails:setPersonalDetails,
    Education:setEducationAndSpecialisation
}