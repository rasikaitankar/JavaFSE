package example;

public class Test {
	public static void main(String[] args) {
		int amount = 10;
		PaymentContext context = new PaymentContext(new CreditCardPayment());
		context.pay(amount);
		
		context.setStrategy(new PayPalPayment());
		context.pay(amount);
		
	}
}
