const highlight = {}
highlight.doSomething = (value)=>{
  console.log("value",value)
}

highlight.highlightElement = function(el){
  console.log("highlight--","okay");

  console.log("locator---:"+el.locator());

  return browser.driver.executeScript("arguments[0].setAttribute('style', arguments[1]);",el.getWebElement(), "color: Red; border: 2px solid red;").
  then(function(resp){
    browser.sleep(2000);
    return el;
  },function(err){
    console.log("error is :"+err);
  });
};

module.exports= highlight;