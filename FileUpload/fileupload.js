const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var path = require('path');

var uploadFileFirst = function(){
    this.fileUploadDiv = element(by.css('div.ui-g-3.ui-sm-10.cards'));
    this.fileUploadOne = element.all(by.css('div#image1_container.card_img_container')).first().element(by.name('photo'));
    
    
    
    this.fileUploadFirst = function(){
        highlightElement.highlightElement(this.fileUploadDiv);
        var fileUpload = '/Users/zac01/Downloads/Images/Screenshot 2017-02-04 21.52.15.png';
        absolutePath = path.resolve(__dirname,fileUpload);
        console.log(absolutePath);
        this.fileUploadOne.sendKeys(absolutePath);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(4000);

    };
    
};

var uploadFileSecond = function(){
    this.fileUploadDiv2 = element(by.css('div.ui-g-4.ui-sm-10.cards.center_cards'));
    this.file_Upload2 = element.all(by.css('div#image2_container.card_img_container')).first().element(by.name('photo'));


    this.fileUploadSecond = function(){
        highlightElement.highlightElement(this.fileUploadDiv2);
        var fileUpload = '/Users/zac01/Downloads/Images/rahul.png';
        absolutePath = path.resolve(__dirname,fileUpload);
        console.log(absolutePath);
        this.file_Upload2.sendKeys(absolutePath);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(4000);
    };
};


var uploadFileThird = function(){
    this.fileUploadDiv3 = element(by.css('div.ui-g-3.ui-sm-10.cards.right_cards'));
    this.file_Upload3  = element.all(by.css('div#image3_container.card_img_container')).first().element(by.name('photo'));


    this.fileUploadThird = function(){
        highlightElement.highlightElement(this.fileUploadDiv3);
        var fileUpload = '/Users/zac01/Downloads/Images/IMG_19052017_145656_0.png';
        absolutePath = path.resolve(__dirname,fileUpload);
        console.log(absolutePath);
        this.file_Upload3.sendKeys(absolutePath);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(4000);
    };
};


var clickContinue = function(){
    this.continueBtn = element(by.buttonText('continue'));

    this.clickOnContinue = function(){
        highlightElement.highlightElement(this.continueBtn);
        this.continueBtn.click();
        browser.sleep(2000);
    };
};

module.exports={
    fileUpload1: uploadFileFirst,
    fileUpload2: uploadFileSecond,
    fileUpload3: uploadFileThird,
    fileUploadContinue: clickContinue
}