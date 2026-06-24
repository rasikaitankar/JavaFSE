package example;

public class CreditCardPayment implements PaymentStrategy{

	@Override
	public void pay(int amount) {
		// TODO Auto-generated method stub
		System.out.println("In credit card payment amount is : "+amount);
	}

}
