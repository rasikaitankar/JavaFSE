package example;

public class BhimAdapter implements PaymentProcessor{

	private bhim b;
	public BhimAdapter() {
			b = new bhim();
	}
	@Override
	public void processPayment() {
		// TODO Auto-generated method stub
		b.bhimStatus();
	}
	
}
