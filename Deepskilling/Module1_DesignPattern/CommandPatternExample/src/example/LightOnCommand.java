package example;

public class LightOnCommand implements Command{
	private Light l;
	public LightOnCommand(Light light) {
		this.l = light;
	}
	@Override
	public void execute() {
		// TODO Auto-generated method stub
		l.on();
	}

}
