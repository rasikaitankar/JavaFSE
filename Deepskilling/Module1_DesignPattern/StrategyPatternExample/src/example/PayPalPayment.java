package example;

public class PayPalPayment implements PaymentStrategy{

	@Override
	public void pay(int amount) {
		// TODO Auto-generated method stub
		System.out.println("In paypal payment amount is : "+amount);
	}

}
