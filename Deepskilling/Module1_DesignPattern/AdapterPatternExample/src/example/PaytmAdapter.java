package example;

public class PaytmAdapter implements PaymentProcessor{

	private paytm p;
	
	public PaytmAdapter() {
		p = new paytm();
	}
	
	@Override
	public void processPayment() {
		// TODO Auto-generated method stub
		p.paytmStatus();
	}
	
}
