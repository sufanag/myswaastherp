const highlightElement =require('../BaseFunctionsPage/highlightelement.js');

console.log('This is selecting clinic=============>>>>>>>');


var SelectClinic = function(){

   
    this.selectClinicElementDemo = element(by.xpath("(.//*[@class='ui-dropdown-label ui-inputtext ui-corner-all'])[8]"));
    this.selectClinic1 = element(by.xpath("(.//*[@class='ui-helper-clearfix'])[2]"));
    this.selectClinicElement2 = element(by.css('div.ui-g-6 > p-dropdown > div > label'));
    this.selectClinic2 = element(by.css('div.ui-g-6 > p-dropdown > div > div.ui-dropdown-panel.ui-widget-content.ui-corner-all.ui-helper-hidden.ui-shadow > div > ul > li:nth-child(2) > div > div > p'))
    this.clinicToGetOptions = function(){

        highlightElement.highlightElement(this.selectClinicElementDemo);
        this.selectClinicElementDemo.click();
        browser.wait(EC.visibilityOf(this.selectClinic1), 5000);
        this.selectClinic1.click();
        browser.sleep(5000);
    };

     this.clinicToGetOptions2 = function(){

        highlightElement.highlightElement(this.selectClinicElement2);
        this.selectClinicElement2.click();
        browser.wait(EC.visibilityOf( this.selectClinic2), 5000);
        this.selectClinic2.click();
        browser.sleep(5000);
    };


    this.clinicAcceptedBtn = function(){
        this.goToClinicBtn = element(by.buttonText('GO TO CLINIC'));
        highlightElement.highlightElement(this.goToClinicBtn);
        this.goToClinicBtn.click();
        browser.sleep(5000);
    };

    this.clinicCompleteProfile = function(){
        this.completeProfile = element(by.xpath('//span[contains(text(),"Complete Profile")]'));
        highlightElement.highlightElement(this.completeProfile);
        this.completeProfile.click();
        browser.sleep(5000);

    }
};

module.exports={
    SelectClinicOptions: SelectClinic 
}