$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/2dlist.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodlist.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Twodlist.user_click_Add_Customer_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Customer\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GREENS-14-PC\u0027, ip: \u0027192.168.0.185\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\GREENS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61477}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ba912cc528220a450c7bd471f965c3c4\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Customer\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.test.Twodlist.user_click_Add_Customer_link(Twodlist.java:28)\r\n\tat ✽.User click Add Customer link(src/test/resources/Features/2dlist.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User provides valid credentials4",
  "rows": [
    {
      "cells": [
        "twoDlist",
        "Meenakshi",
        "mee@gmail.com",
        "Chennai",
        "9876543210"
      ]
    },
    {
      "cells": [
        "twoDlist",
        "Yag",
        "cd@gmail.com",
        "andhra",
        "9876543210"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodlist.user_provides_valid_credentials4(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodlist.verify_ID_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Features/Scenario.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodlist.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Twodlist.user_click_Add_Customer_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Customer\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GREENS-14-PC\u0027, ip: \u0027192.168.0.185\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\GREENS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61551}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 00225c477421c470e66648619049982c\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Customer\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.test.Twodlist.user_click_Add_Customer_link(Twodlist.java:28)\r\n\tat ✽.User click Add Customer link(src/test/resources/Features/Scenario.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User provides valid credentials1",
  "keyword": "When "
});
formatter.match({
  "location": "Twodlist.user_provides_valid_credentials1(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodlist.verify_ID_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Features/ScenarioOutline.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.step({
  "name": "User provides valid credentials2\"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003cAddress\u003e\",\"\u003cPhoneno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "Address",
        "Phoneno"
      ]
    },
    {
      "cells": [
        "Outline",
        "Meenakshi",
        "mee@gmail.com",
        "Andhra",
        "1234567890"
      ]
    },
    {
      "cells": [
        "Lav",
        "Mee",
        "VR@gmail.com",
        "Khammam",
        "1234567890"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodlist.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Twodlist.user_click_Add_Customer_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Customer\u0027]\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GREENS-14-PC\u0027, ip: \u0027192.168.0.185\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\GREENS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61610}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c68170360f85b45d889d5b238f795171\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Customer\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.test.Twodlist.user_click_Add_Customer_link(Twodlist.java:28)\r\n\tat ✽.User click Add Customer link(src/test/resources/Features/ScenarioOutline.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User provides valid credentials2\"Outline\",\"Meenakshi\",\"mee@gmail.com\",\"Andhra\",\"1234567890\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodlist.verify_ID_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodlist.user_should_launch_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GREENS-14-PC\u0027, ip: \u0027192.168.0.185\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\GREENS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61670}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a6f7f829ba5237f46f166b832caf90d2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.test.Twodlist.user_should_launch_browser(Twodlist.java:22)\r\n\tat ✽.User should launch browser(src/test/resources/Features/ScenarioOutline.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Twodlist.user_click_Add_Customer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provides valid credentials2\"Lav\",\"Mee\",\"VR@gmail.com\",\"Khammam\",\"1234567890\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodlist.verify_ID_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Features/onedlist.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodlist.user_should_launch_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GREENS-14-PC\u0027, ip: \u0027192.168.0.185\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x011E7C93+1473683]\n\tOrdinal0 [0x0116ADB1+961969]\n\tOrdinal0 [0x010F42E3+475875]\n\tOrdinal0 [0x010ECAD9+445145]\n\tOrdinal0 [0x010EC6C8+444104]\n\tOrdinal0 [0x010EC441+443457]\n\tOrdinal0 [0x010EBA8C+440972]\n\tOrdinal0 [0x010EB624+439844]\n\tOrdinal0 [0x010EB5E5+439781]\n\tOrdinal0 [0x010F2B45+469829]\n\tOrdinal0 [0x010EB59C+439708]\n\tOrdinal0 [0x010EC0F5+442613]\n\tOrdinal0 [0x010EBA8C+440972]\n\tOrdinal0 [0x010EB624+439844]\n\tOrdinal0 [0x010EB5E5+439781]\n\tOrdinal0 [0x010F149E+464030]\n\tOrdinal0 [0x010EB59C+439708]\n\tOrdinal0 [0x010EC0F5+442613]\n\tOrdinal0 [0x010EBA8C+440972]\n\tOrdinal0 [0x010EB624+439844]\n\tOrdinal0 [0x010EB5E5+439781]\n\tOrdinal0 [0x010EFC9B+457883]\n\tOrdinal0 [0x010EB59C+439708]\n\tOrdinal0 [0x010EC0F5+442613]\n\tOrdinal0 [0x010EBA8C+440972]\n\tOrdinal0 [0x010EB624+439844]\n\tOrdinal0 [0x010EB5E5+439781]\n\tOrdinal0 [0x010EF487+455815]\n\tOrdinal0 [0x010EB59C+439708]\n\tOrdinal0 [0x010EC0F5+442613]\n\tOrdinal0 [0x010EBA8C+440972]\n\tOrdinal0 [0x010EB624+439844]\n\tOrdinal0 [0x010EB5E5+439781]\n\tOrdinal0 [0x010E827C+426620]\n\tOrdinal0 [0x010EB59C+439708]\n\tOrdinal0 [0x010EB484+439428]\n\tOrdinal0 [0x010F4F40+479040]\n\tOrdinal0 [0x010A98FE+170238]\n\tOrdinal0 [0x010A8D1D+167197]\n\tOrdinal0 [0x010A742B+160811]\n\tOrdinal0 [0x01090AE6+68326]\n\tOrdinal0 [0x01091BF0+72688]\n\tOrdinal0 [0x01091B89+72585]\n\tOrdinal0 [0x01184B77+1067895]\n\tGetHandleVerifier [0x01286875+506677]\n\tGetHandleVerifier [0x01286610+506064]\n\tGetHandleVerifier [0x0128D1B8+533624]\n\tGetHandleVerifier [0x0128704A+508682]\n\tOrdinal0 [0x0117C266+1032806]\n\tOrdinal0 [0x0117C0DF+1032415]\n\tOrdinal0 [0x01186A8B+1075851]\n\tOrdinal0 [0x01186BF3+1076211]\n\tOrdinal0 [0x01185BA5+1072037]\n\tBaseThreadInitThunk [0x76C0343D+18]\n\tRtlInitializeExceptionChain [0x779D9802+99]\n\tRtlInitializeExceptionChain [0x779D97D5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.test.Twodlist.user_should_launch_browser(Twodlist.java:21)\r\n\tat ✽.User should launch browser(src/test/resources/Features/onedlist.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Twodlist.user_click_Add_Customer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provides valid credentials3",
  "rows": [
    {
      "cells": [
        "Mee",
        "Meenakshi",
        "ab@gmail.com",
        "chennai",
        "1234567890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodlist.user_provides_valid_credentials3(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodlist.verify_ID_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Features/onedmap.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodlist.user_should_launch_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GREENS-14-PC\u0027, ip: \u0027192.168.0.185\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x011E7C93+1473683]\n\tOrdinal0 [0x0116ADB1+961969]\n\tOrdinal0 [0x010F418C+475532]\n\tOrdinal0 [0x010EDB1A+449306]\n\tOrdinal0 [0x010EE1B8+451000]\n\tOrdinal0 [0x010EF2C5+455365]\n\tOrdinal0 [0x010EB4C5+439493]\n\tOrdinal0 [0x010F4F40+479040]\n\tOrdinal0 [0x010A98FE+170238]\n\tOrdinal0 [0x010A8D1D+167197]\n\tOrdinal0 [0x010A742B+160811]\n\tOrdinal0 [0x01090AE6+68326]\n\tOrdinal0 [0x01091BF0+72688]\n\tOrdinal0 [0x01091B89+72585]\n\tOrdinal0 [0x01184B77+1067895]\n\tGetHandleVerifier [0x01286875+506677]\n\tGetHandleVerifier [0x01286610+506064]\n\tGetHandleVerifier [0x0128D1B8+533624]\n\tGetHandleVerifier [0x0128704A+508682]\n\tOrdinal0 [0x0117C266+1032806]\n\tOrdinal0 [0x0117C0DF+1032415]\n\tOrdinal0 [0x01186A8B+1075851]\n\tOrdinal0 [0x01186BF3+1076211]\n\tOrdinal0 [0x01185BA5+1072037]\n\tBaseThreadInitThunk [0x76C0343D+18]\n\tRtlInitializeExceptionChain [0x779D9802+99]\n\tRtlInitializeExceptionChain [0x779D97D5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.test.Twodlist.user_should_launch_browser(Twodlist.java:21)\r\n\tat ✽.User should launch browser(src/test/resources/Features/onedmap.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Twodlist.user_click_Add_Customer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provides valid credentials5",
  "rows": [
    {
      "cells": [
        "fname",
        "Meen"
      ]
    },
    {
      "cells": [
        "lname",
        "Meenakshi"
      ]
    },
    {
      "cells": [
        "email",
        "mee@yahoo.com"
      ]
    },
    {
      "cells": [
        "Address",
        "Andhra"
      ]
    },
    {
      "cells": [
        "Phoneno",
        "9876543210"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodlist.user_provides_valid_credentials5(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodlist.verify_ID_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Features/twodmap.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate a Customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodlist.user_should_launch_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GREENS-14-PC\u0027, ip: \u0027192.168.0.185\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\GREENS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61750}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1eb80cb60c037e8d7ccb021ec8a51103\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat org.test.Twodlist.user_should_launch_browser(Twodlist.java:23)\r\n\tat ✽.User should launch browser(src/test/resources/Features/twodmap.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click Add Customer link",
  "keyword": "And "
});
formatter.match({
  "location": "Twodlist.user_click_Add_Customer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User provides valid credentials6",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "Address",
        "Phoneno"
      ]
    },
    {
      "cells": [
        "DMap",
        "Vandhu",
        "vr@yahoo.com",
        "Andhra",
        "1234567890"
      ]
    },
    {
      "cells": [
        "woDMap",
        "Mee",
        "mee@gmail.com",
        "Andhra",
        "1234567890"
      ]
    },
    {
      "cells": [
        "DMap",
        "Lav",
        "nare@yahoo.com",
        "Andhra",
        "1234567890"
      ]
    },
    {
      "cells": [
        "DMap",
        "K",
        "kar@gmail.com",
        "Andhra",
        "1234567890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodlist.user_provides_valid_credentials6(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify ID is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodlist.verify_ID_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
});