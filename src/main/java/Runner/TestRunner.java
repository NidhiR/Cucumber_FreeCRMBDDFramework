package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
		
//Cucumber Options:-

// 1. Features: Where exactly your feature file is available(Path of feature file)
// 2. DryRun:Helps u which step definition u missed..(to check the mapping is proper between feature file and step definiton file)
// 3. Glue:Where exactly step definition file is available(Path of step definition)
// 4. Monochrome:Display console output in readable format
// 5. Format:To generate different type of reporting format
// 6. Strict:It will fail execution if their r any pending steps

@RunWith(Cucumber.class)
@CucumberOptions(
		features="/home/mayank/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/login.features",//Path of feature file
		glue={"stepDefinitions"},//Path of step definition
		format= {"pretty","html:test-output","json:json-output/test_json","junit:junit_xml/test.xml"},//Path of feature file
		monochrome=true,//Display console output in readable format
		strict=true,//it will check if any step is not defined in step definition file
		dryRun = false//to check the mapping is proper between feature file and step definiton file
		)
public class TestRunner {

}
