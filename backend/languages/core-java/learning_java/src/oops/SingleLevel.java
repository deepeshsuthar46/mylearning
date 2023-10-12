package oops;

public class SingleLevel {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Child1 ch=new Child1();
		System.out.println(ch.poketMoney);
	}

}

class Parent1 {
	int poketMoney=100;
}

class Child1 extends Parent1{
//	int poketMoney=100;
}
