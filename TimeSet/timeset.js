const highlightElement =require('../BaseFunctionsPage/highlightelement.js');
var Chance = require('chance');
var chance = new Chance();
 var new_arr=[];

var get_weekday_limt = chance.integer({min:1,max:7});

console.log(get_weekday_limt);

for(i=1;i<=get_weekday_limt;i++){
   new_arr.push(chance.weekday());
}
console.log(new_arr);

let unique_arr = [...new Set(new_arr)];

console.log("Need to set time for "+ unique_arr);

for(i=0;i<unique_arr.length;i++){
    console.log('ng-reflect-name='+unique_arr[i]);
}

console.log('This is Setting Time ==================>');

var CheckHeadingText = function(){
     this.headingText = element(by.css('p.heading'));
     this.clickNext = element(by.buttonText('NEXT'));

     this.checkHeadingText = function(){
          highlightElement.highlightElement(this.headingText);
          this.headingText.getText().then(function(headingtext){
              expect(headingtext).toEqual('Set Clinic Timings');
              browser.sleep(2000);
          });
     };

     this.clickNextBtn = function(){
         browser.executeScript('window.scrollTo(0,10000);');
         browser.sleep(2000);
         highlightElement.highlightElement(this.clickNext);
         this.clickNext.click();
         browser.sleep(5000);
     };
};

module.exports={
    HeadingText1: CheckHeadingText
}



