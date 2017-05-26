const highlightElement =require('../BaseFunctionsPage/highlightelement.js');

console.log("Start of the Sign Up Other============>");



var signUpOthersHeaders = function(){
    this.logo = element(by.tagName('img'));
    this.header_bar = element(by.css("div.ui-g-9.ui-md-10.item"));
    this.login_link = element(by.css('[href="#/login"]'));
    

    this.visit= function(){
    browser.get('http://myswaastherp.sia.co.in/#/');
    };


    console.log("This is start of the script========>");

    this.logoDisplayed = function(){
        highlightElement.highlightElement(this.logo );
        expect(this.logo.isDisplayed()).toBe(true);
        
    };

    this.headerBar = function(){
       highlightElement.highlightElement(this.header_bar ); 
       expect(this.header_bar.isDisplayed()).toBe(true);
    };


    this.loginLink = function(){
        highlightElement.highlightElement(this.login_link ); 
       expect(this.login_link.isDisplayed()).toBe(true);
       this.login_link.click()
       expect(browser.getCurrentUrl()).toEqual('http://myswaastherp.sia.co.in/#/login');
       browser.sleep(2000);
    };

};

var signUpOthersPara = function(){

    this.para_header = element(by.css('p.left-heading'));
    this.para_para2 = element(by.css('p.left-paragraph'));

    this.leftHeadingDisplayed = function(){
        highlightElement.highlightElement(this.para_header ); 
        expect(this.para_header.isDisplayed()).toBe(true);
        //console.log(this.para_header.getAttribute("text"));

    };

    this.leftBelowHeadingDisplayed = function(){
        highlightElement.highlightElement(this.para_para2);
        expect(this.para_para2.isDisplayed()).toBe(true); 
    };
};


var signUpOthersTour = function(){
    this.tourbtn = element(by.buttonText('VIEW TOUR'));

    //this section to be used when the functionality will be implemented

    this.tourBtnDisplayed =function(){
         highlightElement.highlightElement(this.tourbtn);
         expect(this.tourbtn.isDisplayed()).toBe(true);
    };
};

var signUpOthersHeading = function(){
    this.heading_top = element(by.css('p.heading-top'));
    this.content_first =element(by.xpath("//div[@class='ui-g-12 heading-container']/p[1]"));
    this.content_second =element(by.xpath("//div[@class='ui-g-12 heading-container']/p[2]"));

    this.headingTopDisplayed = function(){
        highlightElement.highlightElement(this.heading_top);
        expect(this.heading_top.isDisplayed()).toBe(true);
    };

    this.contentDisplayed1 = function(){
        highlightElement.highlightElement(this.content_first);
        expect(this.content_first.isDisplayed()).toBe(true);
    };

    this.contentDisplayed2 = function(){
        highlightElement.highlightElement(this.content_second);
        expect(this.content_second.isDisplayed()).toBe(true);
    }
};

var signUpPrivacy = function(){
    this.privacy = element(by.css("p.privacy-terms"));

    this.privacyDisplayed = function(){
        highlightElement.highlightElement(this.privacy);
        expect(this.privacy.isDisplayed()).toBe(true);
    };
};


module.exports= {
    var1: signUpOthersHeaders,
    var2: signUpOthersPara,
    var3: signUpOthersTour,
    var4: signUpOthersHeading,
    var5: signUpPrivacy
};