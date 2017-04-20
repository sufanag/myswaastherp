const ImageLoaded={}
ImageLoaded.doSomething = (value)=>{
  console.log("Demo Function",value)
}

ImageLoaded.checkforImageLoad = function(){
    browser.executeAsyncScript(function(callback){
        var imgs = document.getElementsByTagName('img'),loaded=0;
        for (var i=0;i<imgs.length;i++){
            
            if(imgs[i].naturalWidth>0){
                loaded=loaded+1;
            };
        };
        callback(imgs.length-loaded);

    }).then(function(brokenImageCount){
        expect(brokenImageCount).toBe(0)
    });
}



module.exports= ImageLoaded;