package example;

public class Test {
	public static void main(String[] args) {
		Notifier n = new EmailNotifier("Storage full Alert!!");
		Notifier email = new SlackNotifierDecorator(n);
		System.out.println(email.send());
		Notifier sms = new SMSNotifierDecorator(email);
		System.out.println(sms.send());
	}
}
