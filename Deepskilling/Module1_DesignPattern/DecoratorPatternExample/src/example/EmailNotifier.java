package example;

public class EmailNotifier implements Notifier{
	private String notification;
	public EmailNotifier(String n) {
		this.notification = n;
	}
	@Override
	public String send() {
		return "Email: " +notification;
	}

}
