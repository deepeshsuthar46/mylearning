package oops;

public class MultilevelInharitance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Child2 ch=new Child2();
System.out.println(ch.poketMoney);
	}

}
class GParent1{
	int poketMoney=100;
}
class Parent2 extends  GParent1{
//	int poketMoney=100;
}

class Child2 extends Parent2{
//	int poketMoney=100;
}