const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var Chance = require('chance');
var chance = new Chance();

var CheckHeading = function(){
    this.headingText = element(by.css('p.heading'));

    this.verifyHeadingText = function(){
         highlightElement.highlightElement(this.headingText);
         this.headingText.getText().then(function(headingtext){
             expect(headingtext).toEqual('Add Staff');
             browser.sleep(2000);
         });
    };
};

var RegistrationSetUp = function(){
    this.clickOwnerAsDoctor = element(by.css('div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default'));
    this.enterOwnerRegistration = element(by.css('[placeholder="Enter registration no."]'));

    this.setUpDoctors = function(){
        //get a boolean to check if the check box has to be checked
        var _bool = chance.bool();
        console.log(_bool);
        var registrationNumber = chance.integer({min:1000,max:1000000});
        
        if (_bool) {
            highlightElement.highlightElement(this.clickOwnerAsDoctor);
            this.clickOwnerAsDoctor.click();
            highlightElement.highlightElement(this.enterOwnerRegistration);
            console.log('Registration number is '+registrationNumber);
            this.enterOwnerRegistration.sendKeys(registrationNumber);
            
        } else {
            var setMoreThanOneDoctor = chance.bool();
            element(by.css('[ng-reflect-name="registration_no"]')).sendKeys(chance.integer({min:1000,max:100120}));
            element(by.buttonText('verify'));
            browser.sleep(2000);
            element(by.css('[ng-reflect-name="name"]')).sendKeys(chance.name());
            element(by.css('[ng-reflect-name="email"]')).sendKeys(chance.email({domain: 'gmail.com'}));
            element(by.css('[ng-reflect-name="mobile"]')).sendKeys(chance.phone({ formatted: false }));
            element(by.buttonText('save')).click();
            /*
            if (setMoreThanOneDoctor) {
                var setHowManyDoctor = chance.integer({min:0,max:2})
                for(i=1;i<=setHowManyDoctor;i++){
                    element(by.buttonText('save')).click();


                }
            } else {
                
            }
            */
        }

    }
};

var setStaff = function(){
    this.firstStaffName = element(by.css('[ng-relfect-name="0"]')).get(0).element(by.css('[ng-reflect-name="name"]'));
    this.firstStaffEmail = element(by.css('[ng-reflect-name="0"]')).get(0).element(by.css('[ng-reflect-name="email"]'));
    this.firstStaffMobile = element(by.css('[ng-reflect-name="0"]')).get(0).element(by.css('[ng-reflect-name="mobile"]'));

    this.setStaffName = function(){
        highlightElement.highlightElement(this.firstStaffName);
        this.firstStaffName.sendKeys(chance.name());
        browser.sleep(1000);
    };

    this.setStaffEmail = function(){
        highlightElement.highlightElement(this.firstStaffEmail);
        this.firstStaffEmail.sendKeys(chance.email({domain: 'gmail.com'}));
        browser.sleep(1000);
    };

    this.setStaffMobile = function(){
        highlightElement.highlightElement(this.firstStaffMobile);
        this.firstStaffEmail.sendKeys(chance.phone({ formatted: false }));
        browser.sleep(1000);
    };
};

module.exports={
    addStaff1: CheckHeading,
    addStaff2: RegistrationSetUp,
    addStaff3: setStaff
}