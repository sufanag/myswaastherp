const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
const doctorProgressParent = element(by.xpath('html/body/app-root/div/app-home/div/div/div[2]/profile-app/div/div[2]/div[2]'));

var clickCompleteProfile = function(){
    this.completeProfileBtn = element(by.buttonText('COMPLETE PROFILE'));

    //highlights this element
    highlightElement.highlightElement(this.completeProfileBtn);
    this.completeProfileBtn.click();
    browser.sleep(2000);
};


module.exports={
    CompleteProfile1 : clickCompleteProfile
}