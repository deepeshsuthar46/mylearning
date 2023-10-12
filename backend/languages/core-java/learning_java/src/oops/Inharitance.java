package oops;

public class Inharitance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Child ch=new Child();
System.out.println(ch.poketMoney);
	}

}

class GParent{
	int poketMoney=100;
}
class Parent extends  GParent{
//	int poketMoney=100;
}

class Child extends Parent{
//	int poketMoney=100;
}