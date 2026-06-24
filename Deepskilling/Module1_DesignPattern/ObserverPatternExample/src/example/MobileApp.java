package example;

public class MobileApp implements Observer{

	private String userName;
	
	public MobileApp(String userName) {
		this.userName = userName;
	}
	
	@Override
	public void update(double stockPrice) {
		// TODO Auto-generated method stub
		System.out.println("Mobile App : Stock price Updated = "+stockPrice);
	}

}
