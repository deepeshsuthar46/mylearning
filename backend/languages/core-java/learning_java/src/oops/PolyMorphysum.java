package oops;

public class PolyMorphysum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
C1 ch=new C1();
ch.property();
System.out.println(ch.mony);
	}

}
class P1{
	int mony=200;
	void property() {
		System.out.println("one home");
	}
}
class C1 extends P1{
	C1(){
		super.property();
	}
	int mony=100;
	void property() {
		System.out.println(super.mony);
	}
}