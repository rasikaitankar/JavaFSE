package example;

public abstract class NotifierDecorator implements Notifier{
	protected Notifier n;
	public NotifierDecorator(Notifier n) {
		this.n = n;
	}
	@Override
	public String send() {
		return n.send();
	}
}
