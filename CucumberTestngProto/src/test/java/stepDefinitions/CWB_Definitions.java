package stepDefinitions;

import runners.TestRunnerTestNg;

import java.awt.AWTException;
import java.time.Duration;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterSuite;


import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.java.StepDefAnnotation;
import enums.DesktopXpath;
//import enums.AndroidXpath;

@StepDefAnnotation

public class CWB_Definitions extends TestRunnerTestNg {

	WebDriver driverMob=TestRunnerTestNg.driver;
	DesiredCapabilities capabilities = new DesiredCapabilities();
	private float price = 0;
	private Scenario scenario;

	@Given ("^I start a \"([^\"]*)\" sesion and debug environment is set to \"([^\"]*)\"$")
	public void startApp(String myBrowser, String isDebug) throws Exception
	{
		this.setMyBrowser(myBrowser);
		this.setIsDebug(isDebug);
		driverMob.manage().window().maximize();
	}
	
	@When ("^I wait for \"([^\"]*)\" screen to load$")
	public void waitForElement(String pageStr){
	
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(60));
		String elementXpath ="", url ="";
		switch (pageStr) 
		{
			case "DemoBlaze_Home":
				elementXpath = DesktopXpath.Desktop_DemoBlaze.label;
				url="https://www.demoblaze.com/index.html";
			break;
			case "Description":
				elementXpath = DesktopXpath.Desktop_DemoBlaze_description.label;
			break;
		}
		
		if (!url.equals(""))
			driverMob.get(url);

		wait.until(ExpectedConditions.elementToBeClickable(By.xpath(elementXpath)));
	}
	
	@Then ("^I tap on \"([^\"]*)\"$")
	public void selectBoB(String controlName){
		
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(10));
		String elementXpath ="";
		switch(controlName){
			/*case "Desktop_my_account":
				elementXpath = DesktopXpath.Desktop_my_account.label;
			break;
			case "Desktop_search_bar":
				elementXpath = DesktopXpath.Desktop_home_google.label;
			break;*/
			case "Laptops":
				elementXpath = DesktopXpath.Desktop_DemoBlaze_links.label.replace("linkText", "notebook");
			break;
			case "Add to chart":
				elementXpath = DesktopXpath.Desktop_DemoBlaze_add_to_chart.label;
			break;
			case "Chart":
				elementXpath = DesktopXpath.Desktop_DemoBlaze_chart.label;
			break;
			case "Place order":
				elementXpath = DesktopXpath.Desktop_DemoBlaze_place_order.label;
			break;
		}
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath(elementXpath))).click();
	}
	
	@Then ("^I take one screenshot$")
	public void pageScreenshot(){
		//Scenario scenario = this.testNGCucumberRunner.
		byte[] screenshot = ((TakesScreenshot) driverMob).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
	}
	
	@Then ("^I handle Cookies popup$")
	public void cookiesAccept(){
		
	}
	
	@Then ("^I tap on \"([^\"]*)\" link$")
	public void selectLink(String linkLabel) throws AWTException{
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(60));
		
		//Table loading is slower than the webdriver, I need to wait until the table is loaded.
		wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath("//div[@id='tbodyid']/div[contains(@class, 'md-6 mb-4')]"), 6));
		
		List<WebElement> listLinks = driverMob.findElements(By.xpath("//a[@class='hrefch']"));
		for(WebElement listLink:listLinks)
		{
			wait.until(ExpectedConditions.elementToBeClickable(listLink));
			if(listLink.getAttribute("textContent").equals(linkLabel)){
				listLink.click();
				wait.until(ExpectedConditions.elementToBeClickable(By.xpath(DesktopXpath.Desktop_DemoBlaze_description.label)));
				break;
			}
			
		}
	}
	
	@Then ("^I wait for alert pop up to appear$")
	public void waitForPopUp() throws InterruptedException{
		//I need to wait until the pop up message is displayed.
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(60));
		wait.until(ExpectedConditions.alertIsPresent());
		try {
			//driverMob.switchTo().alert().wait(10000);
			driverMob.switchTo().alert().accept();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Then ("^I click on delete button for \"([^\"]*)\"$")
	public void deleteItemOfChart(String pageStr){
		boolean elementDisplayed=false;
		int tableSize=0;
		List<WebElement> chartTable;
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(60));
		//I wait for the cart table to be generated.
		wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//tbody[@id='tbodyid']//td"), 0));
		//Now I wait for the element for deleting, to be displayed
		while (elementDisplayed==false)
		{	
			chartTable = driverMob.findElements(By.xpath("//tbody[@id='tbodyid']//td"));
			
			for(WebElement tableRow:chartTable)
			{
				if(tableRow.getAttribute("textContent").equals(pageStr))
				{
					tableSize=chartTable.size(); //I got the current size of the table.
					tableRow.findElement(By.xpath("./ancestor::tr/td/a[contains(@onclick,'delete')]")).click();
					elementDisplayed=true;
					break;
				}
			}
		}
		//I wait until the table is regenerated with one less line.
		wait.until(ExpectedConditions.numberOfElementsToBe(By.xpath("//tbody[@id='tbodyid']//td"), tableSize-4));
	}
	
	@Then ("^I check the price of the order$")
	public void chartPrice(){
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(10));
		//Get price values and assign it to price variable.
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath(DesktopXpath.Desktop_DemoBlaze_chart_price.label)));
		price=Float.parseFloat(driverMob.findElement(By.xpath(DesktopXpath.Desktop_DemoBlaze_chart_price.label)).getAttribute("innerText"));
	}
	
	@Then ("^I fill all the fields of the place order$")
	public void orderFillFields(){
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(10));
		//Name
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='name']")));
		driverMob.findElement(By.xpath("//input[@id='name']")).sendKeys("Full Name");
		//Country
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='country']")));
		driverMob.findElement(By.xpath("//input[@id='country']")).sendKeys("Country");
		//Country
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='city']")));
		driverMob.findElement(By.xpath("//input[@id='city']")).sendKeys("City");
		//CreditCard
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='card']")));
		driverMob.findElement(By.xpath("//input[@id='card']")).sendKeys("1234-1234-1234-1234");
		//Month
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='month']")));
		driverMob.findElement(By.xpath("//input[@id='month']")).sendKeys("April");
		//Year
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='year']")));
		driverMob.findElement(By.xpath("//input[@id='year']")).sendKeys("2022");
		//Purchase button
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(@onclick,'purchase')]")));
		driverMob.findElement(By.xpath("//button[contains(@onclick,'purchase')]")).click();
	}
	
	@Then ("^I check the order ID and assert price$")
	public void checkThePrice(){
		WebDriverWait wait = new WebDriverWait(driverMob, Duration.ofSeconds(10));
		String orderID, finalPrice, summaryText;
		//Get order summary and switch to it. Then get the order ID and add it to the Cluecumber report
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath(DesktopXpath.Desktop_DemoBlaze_order_summary.label)));
		//WebElement orderSummary = driverMob.findElement(By.xpath(DesktopXpath.Desktop_DemoBlaze_order_summary.label));
		//driverMob.switchTo().frame(orderSummary);
		
		summaryText=driverMob.findElement(By.xpath("//p[contains(@class,'muted')]")).getAttribute("innerText");
		orderID=summaryText.substring(summaryText.indexOf("Id: ")+4, summaryText.indexOf("\n"));
		scenario.write("Order id:"+orderID);
		
		//Finally, assert the price got in chartPrice is the same included in the summary. Set a message in the Cluecumber report according to it.
		finalPrice=summaryText.substring(summaryText.indexOf("Amount: ")+8, summaryText.indexOf("USD"));
		//If expected price is not the same to the one displayed in the summary
		if (price!=Float.parseFloat(finalPrice)){
			scenario.write("Expected price:"+String.valueOf(price)+" USD");
			scenario.write("Actual final price:"+finalPrice+" USD");
		}
	}
	
	
	@Before
	public void before(Scenario scenario) {
	    this.scenario = scenario;
	}
	/*@BeforeMethod
	private void loadTestCapabilities(){
		platformName = this.getMyBrowser();
	}*/
	
    @AfterSuite
    public void AfterTest(){
    	try{
    		//driverMob.closeApp();
    		TestRunnerTestNg.driver.close();
    	} catch(Exception e){
    		TestRunnerTestNg.driver.quit();
    	}
    };
    
}

