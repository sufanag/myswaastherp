const httpGetCode = {}
httpGetCode.doSomething = (value)=>{
  console.log("Getting http code",value)
}


httpGetCode.httpGet = function(siteUrl){

    var http = require('http');
    var defer = protractor.promise.defer();

    http.get(siteUrl, function(response) {

        var bodyString = '';

        response.setEncoding('utf8');

        response.on("data", function(chunk) {
            bodyString += chunk;
        });

        response.on('end', function() {
            defer.fulfill({
                statusCode: response.statusCode,
                bodyString: bodyString
            });
        });


    }).on('error', function(e) {
        defer.reject("Got http.get error: " + e.message);
    });

    return defer.promise;
}


module.exports=httpGetCode;

