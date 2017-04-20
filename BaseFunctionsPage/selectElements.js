const selectElement={}

selectElement.doElementSearch = (value)=>{
  console.log("Searching an element",value)
}


selectElement.selectElementDropdown =function(element,index,milliseconds){
     console.log("Selecting element by drop down","OK");

     element.all(by.tagName('option')).get(2).click();
     
     /*element.all(by.tagName('option')).then(function(options){
         
         options[2].click();
     });*/
/*
     if(typeof milliseconds!=='undefined'){
         browser.sleep(milliseconds);
     }*/

}

module.exports =selectElement;