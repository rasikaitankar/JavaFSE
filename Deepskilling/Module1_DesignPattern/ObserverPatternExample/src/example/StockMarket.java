package example;

import java.util.ArrayList;
import java.util.List;

public class StockMarket implements Stock{

	private List<Observer> listObservers;
	private double stockPrice;
	
	public StockMarket() {
		listObservers = new ArrayList<>();
	}
	
	@Override
	public void register(Observer n) {
		// TODO Auto-generated method stub
		listObservers.add(n);
	}

	@Override
	public void deregister(Observer o) {
		listObservers.remove(o);
	}

	@Override
	public void notifyObservers() {
		// TODO Auto-generated method stub
		for(Observer s : listObservers) {
//			System.out.println((s==this)+" "+s+" "+this);
			s.update(stockPrice);
		}
	}
	
	public void setStockPrice(double Price) {
		this.stockPrice = Price;
		notifyObservers();
	}

	public double getStockPrice(){
		return stockPrice;
	}
}
