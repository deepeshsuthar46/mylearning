package methods;
import java.util.function.Consumer;
public class TypesOfMethodes {
 public String t4="im from another pacakage";
	public static void main(String[] args) {
		// TODO Auto-generated method stub
Human srusti=new Human("yes");
System.out.println(srusti);
	}

}

class Human{
	String hands1="there";
	Integer legs;
	boolean face1;
	boolean head;
	 Consumer memory=(a)->{};
	Human(String val){
		this.hands1=val;
	}
	int abc(){
		return 123;
	}
	String abc1(){
		return "hello";
	}
	Human humanReturn(){
		return new Human("");
	}
}
