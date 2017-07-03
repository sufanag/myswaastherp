const highlightElement =require('../BaseFunctionsPage/highlightelement.js');

console.log('This is selecting clinic=============>>>>>>>');


var SelectClinic = function(){
    var SelectClinicDiv = element(by.css('p-dialog.prescription-diaglog'));
    var clinicDropDown = element(by.css('div.ui-g-6'));
    var dropDownOptions = element(by.css('li.ui-dropdown-item.ui-corner-all.ui-state-highlight'))
    this.goToClinicBtn = element(by.buttonText('GO TO CLINIC'));

    this.clinicToGetOptions = function(){
        browser.wait(EC.visibilityOf(SelectClinicDiv), 5000);
        highlightElement.highlightElement(SelectClinicDiv);
        SelectClinicDiv.element(clinicDropDown.locator()).click();
        browser.actions().sendKeys(protractor.Key.DOWN).perform();
        browser.wait(EC.visibilityOf(SelectClinicDiv.element(dropDownOptions.locator())), 5000);
        browser.actions().mouseMove(SelectClinicDiv.element(dropDownOptions.locator())).click().perform();
        browser.sleep(1000);
        SelectClinicDiv.element(clinicDropDown.locator()).click();
    };


    this.clinicAcceptedBtn = function(){
        highlightElement.highlightElement(this.goToClinicBtn);
        this.goToClinicBtn.click();
        browser.sleep(5000);
    };
};

module.exports={
    SelectClinicOptions: SelectClinic 
}