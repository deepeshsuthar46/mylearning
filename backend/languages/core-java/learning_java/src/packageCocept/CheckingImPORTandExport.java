package packageCocept;

import AccessModiFiers.UnderstandAccessModiFier;
import methods.TypesOfMethodes;

public class CheckingImPORTandExport {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Test num=new Test();
		System.out.println(num.t);
		ExternalClass data=new ExternalClass();
		System.out.println(data.t1);
		TestWioutPublic data2=new TestWioutPublic();
		System.out.println(data2.t3);
		TypesOfMethodes data5=new TypesOfMethodes();
  System.out.println(data5.t4);
  UnderstandAccessModiFier data4=new UnderstandAccessModiFier();
  System.out.println(data4.getSister());
data4.setSister(4444444);
System.out.println(data4.getSister());
	}

}
class Test{
	String t="hello";
}
