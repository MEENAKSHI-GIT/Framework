package org.test;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class Twodlist {
	public static WebDriver driver;
	@Given("User should launch browser")
	public void user_should_launch_browser() {
	
	    System.setProperty("webdriver.chrome.driver","C:\\Users\\Greens-14\\eclipse\\java-oxygen\\eclipse\\VijRe\\cucumber1\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		driver.manage().window().maximize();
	}

	@Given("User click Add Customer link")
	public void user_click_Add_Customer_link() {
		driver.findElement(By.xpath("//a[text()='Add Customer']")).click();
	}
	
	@When("User provides valid credentials1")
	public void user_provides_valid_credentials1(io.cucumber.datatable.DataTable dataTable) {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
	   	   driver.findElement(By.id("fname")).sendKeys("Meenu");
	   	   driver.findElement(By.id("lname")).sendKeys("Mee");
	   	   driver.findElement(By.id("email")).sendKeys("abc@gmail.com");
	   	 driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("Chennai");
	   	   driver.findElement(By.xpath("//input[@name='telephoneno']")).sendKeys("897984558");
	   	   driver.findElement(By.xpath("//input[@value='Submit']")).click();
	   	System.out.println("Scenario done");
	}
	
	@When("User provides valid credentials2 {string},{string},{string},{string},{string}")
public void user_provides_valid_credentials2(String fname, String lname, String email, String Address, String Phoneno) {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
	   	   driver.findElement(By.id("fname")).sendKeys(fname);
	   	   driver.findElement(By.id("lname")).sendKeys(lname);
	   	   driver.findElement(By.id("email")).sendKeys(email);
	   	 driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(Address);
	   	   driver.findElement(By.xpath("//input[@name='telephoneno']")).sendKeys(Phoneno);
	   	   driver.findElement(By.xpath("//input[@value='Submit']")).click();
	   	System.out.println("Scenario Outline done");
}
		@When("User provides valid credentials3")
	public void user_provides_valid_credentials3(io.cucumber.datatable.DataTable dataTable) {
	    List<String> onedList = dataTable.asList(String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
	   	   driver.findElement(By.id("fname")).sendKeys(onedList.get(0));
	   	   driver.findElement(By.id("lname")).sendKeys(onedList.get(1));
	   	   driver.findElement(By.id("email")).sendKeys(onedList.get(2));
	   	 driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(onedList.get(3));
	   	   driver.findElement(By.xpath("//input[@name='telephoneno']")).sendKeys(onedList.get(4));
	   	   driver.findElement(By.xpath("//input[@value='Submit']")).click();
	   	System.out.println("OneD List done");
	}
	
	@When("User provides valid credentials4")
	public void user_provides_valid_credentials4(io.cucumber.datatable.DataTable dataTable) {
	List<List<String>> twodlist = dataTable.asLists(String.class);
	
		
		driver.findElement(By.xpath("//label[text()='Done']")).click();
	   driver.findElement(By.id("fname")).sendKeys(twodlist.get(1).get(0));
	   driver.findElement(By.id("lname")).sendKeys(twodlist.get(0).get(1));
	   driver.findElement(By.id("email")).sendKeys(twodlist.get(0).get(2));
	   driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(twodlist.get(1).get(3));
	   driver.findElement(By.xpath("//input[@name='telephoneno']")).sendKeys(twodlist.get(1).get(4));
	   driver.findElement(By.xpath("//input[@value='Submit']")).click();
	   System.out.println("twodlist done");
	}
	  
	  @When("User provides valid credentials5")
	public void user_provides_valid_credentials5(io.cucumber.datatable.DataTable cust) { 
	   Map<String, String> onedMap = cust.asMap(String.class, String.class);
	   
	   		
	   		driver.findElement(By.xpath("//label[text()='Done']")).click();
	   	   driver.findElement(By.id("fname")).sendKeys(onedMap.get("fname"));
	   	   driver.findElement(By.id("lname")).sendKeys(onedMap.get("lname"));
	   	   driver.findElement(By.id("email")).sendKeys(onedMap.get("email"));
	   	 driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(onedMap.get("Address"));
	   	   driver.findElement(By.xpath("//input[@name='telephoneno']")).sendKeys(onedMap.get("Phoneno"));
	   	   driver.findElement(By.xpath("//input[@value='Submit']")).click();
	   	   
	   	   System.out.println("onedMap done");
	}
	

	
	@When("User provides valid credentials6")
	public void user_provides_valid_credentials6(io.cucumber.datatable.DataTable dataTable) {
	    List<Map<String,String>> twodMap = dataTable.asMaps(String.class,String.class);
	    driver.findElement(By.xpath("//label[text()='Done']")).click();
	   	   driver.findElement(By.id("fname")).sendKeys(twodMap.get(0).get("fname"));
	   	   driver.findElement(By.id("lname")).sendKeys(twodMap.get(1).get("lname"));
	   	   driver.findElement(By.id("email")).sendKeys(twodMap.get(2).get("email"));
	   	 driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(twodMap.get(3).get("Address"));
	   	   driver.findElement(By.xpath("//input[@name='telephoneno']")).sendKeys(twodMap.get(3).get("Phoneno"));
	   	   driver.findElement(By.xpath("//input[@value='Submit']")).click();
	   	System.out.println("twodMap done");
	}




	@Then("Verify ID is displayed")
	public void verify_ID_is_displayed() {
	   System.out.println("done");
	  
	   Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	   driver.quit();
	}


	
	
}
