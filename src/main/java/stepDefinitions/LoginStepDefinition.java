package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page(){
//		System.setProperty("webdriver.gecko.driver","/Users/ak/Downloads/git/test_expert/drivers/geckodriver");
//        driver = new FirefoxDriver();
		System.setProperty("webdriver.chrome.driver","/usr/bin/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://www.amazon.com");
	}
	
	@When("^title of amzon file$")
	public void title_of_amzon_file(){
	    String title = driver.getTitle();
	    System.out.println(title);
	    //Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", title);
	}

	@Then("^search for diaper$")
	public void search_for_diaper(){
		driver.findElement(By.id("twotabsearchtextbox")).sendKeys("diaper");
		driver.quit();

	    
	}
	

}
