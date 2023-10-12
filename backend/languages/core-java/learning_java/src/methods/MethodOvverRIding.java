package methods;

public class MethodOvverRIding extends Abc{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		alphabaet();
	}
	static void alphabaet() {
		System.out.println("im child one");
	}

}
class Abc{
	static void alphabaet() {
		System.out.println("im child");
	}
}
