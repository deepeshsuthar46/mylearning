package methods;

public class MethodOverLoading {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println(add(3,4));
		System.out.println(add(3,6,2));
	}
	public static int add(int a,int b) {
		return a+b;
	}
	public static int add(int a,int b,int c) {
		return a+b+c;
	}

}
