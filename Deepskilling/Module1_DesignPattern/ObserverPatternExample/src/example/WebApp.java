package example;

public class WebApp implements Observer{
	private String userName;
	
	public WebApp(String userName) {
		this.userName = userName;
	}
	
	@Override
	public void update(double stockPrice) {
		// TODO Auto-generated method stub
		System.out.println("Web App : Stock price Updated = "+stockPrice);
	}

}
