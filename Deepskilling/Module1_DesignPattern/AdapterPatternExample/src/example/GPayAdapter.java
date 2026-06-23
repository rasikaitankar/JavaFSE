package example;

public class GPayAdapter implements PaymentProcessor{
	private gpay gp;
	public GPayAdapter() {
		gp = new gpay();
	}
	@Override
	public void processPayment() {
		// TODO Auto-generated method stub
		gp.gpayStatus();
	}

}
