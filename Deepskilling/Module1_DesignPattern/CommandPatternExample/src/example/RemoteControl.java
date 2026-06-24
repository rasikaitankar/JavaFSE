package example;

public class RemoteControl {
	private Command command;
	protected void setCommand(Command c) {
		this.command = c;
	}
	public void pressButton() {
		command.execute();
	}
}
