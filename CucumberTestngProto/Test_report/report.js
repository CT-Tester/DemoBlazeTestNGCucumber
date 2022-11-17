$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/Search_DemoBlaze_TestNg.feature");
formatter.feature({
  "line": 2,
  "name": "DemoBlaze add/delete items to cart",
  "description": "",
  "id": "demoblaze-add/delete-items-to-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Module_Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Add_items_to_chart",
  "description": "",
  "id": "demoblaze-add/delete-items-to-cart;add-items-to-chart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@UI"
    },
    {
      "line": 4,
      "name": "@Mobile"
    },
    {
      "line": 4,
      "name": "@Automated"
    },
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Priority_High"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Login Across LOBs"
    }
  ],
  "line": 7,
  "name": "I start a \"chrome\" sesion and debug environment is set to \"Yes\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I wait for \"DemoBlaze_Home\" screen to load",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I handle Cookies popup",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I tap on \"Laptops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I tap on \"\u003cItemName\u003e\" link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I wait for \"Description\" screen to load",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I tap on \"Add to chart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I wait for alert pop up to appear",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I take one screenshot",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "demoblaze-add/delete-items-to-cart;add-items-to-chart;",
  "rows": [
    {
      "cells": [
        "ItemName"
      ],
      "line": 18,
      "id": "demoblaze-add/delete-items-to-cart;add-items-to-chart;;1"
    },
    {
      "cells": [
        "Sony vaio i5"
      ],
      "line": 19,
      "id": "demoblaze-add/delete-items-to-cart;add-items-to-chart;;2"
    },
    {
      "cells": [
        "Dell i7 8gb"
      ],
      "line": 20,
      "id": "demoblaze-add/delete-items-to-cart;add-items-to-chart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1067988,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Add_items_to_chart",
  "description": "",
  "id": "demoblaze-add/delete-items-to-cart;add-items-to-chart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Automated"
    },
    {
      "line": 1,
      "name": "@Module_Login"
    },
    {
      "line": 4,
      "name": "@UI"
    },
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Priority_High"
    },
    {
      "line": 4,
      "name": "@Mobile"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Login Across LOBs"
    }
  ],
  "line": 7,
  "name": "I start a \"chrome\" sesion and debug environment is set to \"Yes\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I wait for \"DemoBlaze_Home\" screen to load",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I handle Cookies popup",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I tap on \"Laptops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I tap on \"Sony vaio i5\" link",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I wait for \"Description\" screen to load",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I tap on \"Add to chart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I wait for alert pop up to appear",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I take one screenshot",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    },
    {
      "val": "Yes",
      "offset": 59
    }
  ],
  "location": "CWB_Definitions.startApp(String,String)"
});
formatter.result({
  "duration": 1073407844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DemoBlaze_Home",
      "offset": 12
    }
  ],
  "location": "CWB_Definitions.waitForElement(String)"
});
formatter.result({
  "duration": 11381031171,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.cookiesAccept()"
});
formatter.result({
  "duration": 20518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectBoB(String)"
});
formatter.result({
  "duration": 1258783410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sony vaio i5",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectLink(String)"
});
formatter.result({
  "duration": 4463860718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 12
    }
  ],
  "location": "CWB_Definitions.waitForElement(String)"
});
formatter.result({
  "duration": 49621443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to chart",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectBoB(String)"
});
formatter.result({
  "duration": 744954285,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.waitForPopUp()"
});
formatter.result({
  "duration": 2673312566,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.pageScreenshot()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 886801461,
  "status": "passed"
});
formatter.before({
  "duration": 35512,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add_items_to_chart",
  "description": "",
  "id": "demoblaze-add/delete-items-to-cart;add-items-to-chart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Automated"
    },
    {
      "line": 1,
      "name": "@Module_Login"
    },
    {
      "line": 4,
      "name": "@UI"
    },
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@Priority_High"
    },
    {
      "line": 4,
      "name": "@Mobile"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Login Across LOBs"
    }
  ],
  "line": 7,
  "name": "I start a \"chrome\" sesion and debug environment is set to \"Yes\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I wait for \"DemoBlaze_Home\" screen to load",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I handle Cookies popup",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I tap on \"Laptops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I tap on \"Dell i7 8gb\" link",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I wait for \"Description\" screen to load",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I tap on \"Add to chart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I wait for alert pop up to appear",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I take one screenshot",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    },
    {
      "val": "Yes",
      "offset": 59
    }
  ],
  "location": "CWB_Definitions.startApp(String,String)"
});
formatter.result({
  "duration": 19401338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DemoBlaze_Home",
      "offset": 12
    }
  ],
  "location": "CWB_Definitions.waitForElement(String)"
});
formatter.result({
  "duration": 1476301984,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.cookiesAccept()"
});
formatter.result({
  "duration": 18677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectBoB(String)"
});
formatter.result({
  "duration": 231427405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dell i7 8gb",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectLink(String)"
});
formatter.result({
  "duration": 2525378912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Description",
      "offset": 12
    }
  ],
  "location": "CWB_Definitions.waitForElement(String)"
});
formatter.result({
  "duration": 39100976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to chart",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectBoB(String)"
});
formatter.result({
  "duration": 103325966,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.waitForPopUp()"
});
formatter.result({
  "duration": 524480593,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.pageScreenshot()"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 282549028,
  "status": "passed"
});
formatter.before({
  "duration": 60502,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Delete_Dell_i7_8GB_to_chart",
  "description": "",
  "id": "demoblaze-add/delete-items-to-cart;delete-dell-i7-8gb-to-chart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@UI"
    },
    {
      "line": 23,
      "name": "@Mobile"
    },
    {
      "line": 23,
      "name": "@Automated"
    },
    {
      "line": 23,
      "name": "@Regression"
    },
    {
      "line": 23,
      "name": "@Priority_High"
    },
    {
      "line": 23,
      "name": "@Login_Error"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Login Across LOBs"
    }
  ],
  "line": 26,
  "name": "I start a \"chrome\" sesion and debug environment is set to \"Yes\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I wait for \"DemoBlaze_Home\" screen to load",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I handle Cookies popup",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I tap on \"Chart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on delete button for \"Dell i7 8gb\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I take one screenshot",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    },
    {
      "val": "Yes",
      "offset": 59
    }
  ],
  "location": "CWB_Definitions.startApp(String,String)"
});
formatter.result({
  "duration": 12070891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DemoBlaze_Home",
      "offset": 12
    }
  ],
  "location": "CWB_Definitions.waitForElement(String)"
});
formatter.result({
  "duration": 416050382,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.cookiesAccept()"
});
formatter.result({
  "duration": 15520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chart",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectBoB(String)"
});
formatter.result({
  "duration": 1178438907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dell i7 8gb",
      "offset": 30
    }
  ],
  "location": "CWB_Definitions.deleteItemOfChart(String)"
});
formatter.result({
  "duration": 4189890050,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.pageScreenshot()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 259673311,
  "status": "passed"
});
formatter.before({
  "duration": 26569,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Delete_Dell_i7_8GB_to_chart",
  "description": "",
  "id": "demoblaze-add/delete-items-to-cart;delete-dell-i7-8gb-to-chart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@UI"
    },
    {
      "line": 33,
      "name": "@Mobile"
    },
    {
      "line": 33,
      "name": "@Automated"
    },
    {
      "line": 33,
      "name": "@Regression"
    },
    {
      "line": 33,
      "name": "@Priority_High"
    },
    {
      "line": 33,
      "name": "@Login_Error"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#Login Across LOBs"
    }
  ],
  "line": 36,
  "name": "I start a \"chrome\" sesion and debug environment is set to \"Yes\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I wait for \"DemoBlaze_Home\" screen to load",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I handle Cookies popup",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I tap on \"Chart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I check the price of the order",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I tap on \"Place order\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I fill all the fields of the place order",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I check the order ID and assert price",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I take one screenshot",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 11
    },
    {
      "val": "Yes",
      "offset": 59
    }
  ],
  "location": "CWB_Definitions.startApp(String,String)"
});
formatter.result({
  "duration": 6556287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DemoBlaze_Home",
      "offset": 12
    }
  ],
  "location": "CWB_Definitions.waitForElement(String)"
});
formatter.result({
  "duration": 441201754,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.cookiesAccept()"
});
formatter.result({
  "duration": 13152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chart",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectBoB(String)"
});
formatter.result({
  "duration": 427758000,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.chartPrice()"
});
formatter.result({
  "duration": 1250070103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Place order",
      "offset": 10
    }
  ],
  "location": "CWB_Definitions.selectBoB(String)"
});
formatter.result({
  "duration": 147864209,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.orderFillFields()"
});
formatter.result({
  "duration": 2680459140,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.checkThePrice()"
});
formatter.write("Order id:1059043");
formatter.result({
  "duration": 133793603,
  "status": "passed"
});
formatter.match({
  "location": "CWB_Definitions.pageScreenshot()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 234826815,
  "status": "passed"
});
});