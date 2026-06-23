package example;

public class SlackNotifierDecorator extends NotifierDecorator{
	public SlackNotifierDecorator(Notifier n) {
		super(n);
	}
	public String send() {
		return super.send()+" Slack sent";	
	}
}
