package example;

public class LightOffCommand implements Command{
	private Light l;
	public LightOffCommand(Light light) {
		this.l = light;
	}
	@Override
	public void execute() {
		// TODO Auto-generated method stub
		l.off();
	}

}
