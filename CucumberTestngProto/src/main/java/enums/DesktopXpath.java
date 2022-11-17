package enums;

public enum DesktopXpath {
	
	Desktop_DemoBlaze("//div[@id='tbodyid']"),
	Desktop_DemoBlaze_links("//a[contains(@onclick,'linkText')]"),
	Desktop_DemoBlaze_description("//div[@id='more-information']"),
	Desktop_DemoBlaze_chart("//li/a[@id='cartur']"),
	Desktop_DemoBlaze_add_to_chart("//a[contains(@class,'btn-success')]"),
	Desktop_DemoBlaze_chart_price("//div/h3[@id='totalp']"),
	Desktop_DemoBlaze_order_summary("//div[contains(@class,'showSweetAlert')]"),
	Desktop_DemoBlaze_place_order("//button[contains(@class,'btn-success')]");
	
	public final String label;

    private DesktopXpath(String label) {
        this.label = label;
    }
}
