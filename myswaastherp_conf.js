let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

//require('protractor/built/logger').Logger.logLevel = 1;


exports.config={
    framework:'jasmine',
    //rootElement: '',
    seleniumAddress:"http://localhost:4444/wd/hub",
    jasmineNodeOpts:{
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    },
    specs:["Specs/signup-success.spec.js"],
    useAllAngular2AppRoots:true,
   capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
},/*
   capabilities: {
    browserName: 'firefox',
    marionette: true,
  },*/
  onPrepare:function(){
      global.EC = protractor.ExpectedConditions;
      browser.manage().window().setSize(1280,1024);
      jasmine.getEnv().addReporter(new SpecReporter({
          spec:{
              displayStacktrace:true
          },
          summary:{
              displayDuration:false
          }
      }));
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir:'allure_results'
      }));
     jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }

};
