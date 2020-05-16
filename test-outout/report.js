$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/mayank/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/login.features");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of amzon file",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "search for diaper",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 164336006,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat stepDefinitions.LoginStepDefinition.user_is_already_on_Login_Page(LoginStepDefinition.java:20)\n\tat ✽.Given user is already on Login Page(/home/mayank/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/login.features:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_amzon_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.search_for_diaper()"
});
formatter.result({
  "status": "skipped"
});
});