const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var userDetails = require('../Specs/signup-success.spec.js');

var useremail = userDetails.useremail;
var phoneNumber = userDetails.phoneNumber;

console.log('This is start of complete profile page===============>');


var CompleteProfile = function(){
    this.headerText = element(by.xpath('//div[@class="ui-g-12"]/p'));
    this.bottomHeader = element(by.xpath('//div[contains(@class,"content_section")]/p'));
    this.personEmail = element(by.css('p.email'));
    this.phone = element(by.css('p.mobile'));

    this.verifyUserEmail = function(){
        highlightElement.highlightElement(this.personEmail);
        this.personEmail.getText().then(function(text){
            console.log(text);
            console.log(useremail);
            expect(text).toEqual(useremail);
        });
    };
};


var animationsInformation = function(){
    this.letsgetstarted = element(by.css('p.get_started'));
    this.containerAnimations = element(by.css('p.icons_container'));
};


var continueAhead = function(){
    this.continueBtn = element(by.buttonText('CONTINUE'));
};



module.exports={
    export1: CompleteProfile
}