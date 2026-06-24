package example;

public class Test {
	public static void main(String[] args) {
		
		StockMarket stock = new StockMarket();
		Observer o1 = new MobileApp("vivoV031");
		Observer o2 = new WebApp("admin");
		
		stock.register(o1);
		stock.register(o2);
		
		System.out.println("Change in price");
				
		stock.setStockPrice(2500.00);
		
		System.out.println("Again change in price");
		
		stock.deregister(o2);
		
		stock.setStockPrice(2750.60);
		
	}
}
