package example;

public class SMSNotifierDecorator extends NotifierDecorator{
	public SMSNotifierDecorator(Notifier n) {
		super(n);
	}
	public String send() {
		return super.send()+" SMS sent";
	}
}
