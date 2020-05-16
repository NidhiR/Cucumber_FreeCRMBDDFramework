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
  "duration": 4505156270,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_amzon_file()"
});
formatter.result({
  "duration": 13479132,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.search_for_diaper()"
});
formatter.result({
  "duration": 239761841,
  "status": "passed"
});
});