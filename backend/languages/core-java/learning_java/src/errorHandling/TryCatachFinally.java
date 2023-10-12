package errorHandling;

public class TryCatachFinally {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int num=100;

try {
	
	System.out.println(num/10);

}catch(Exception e) {
	System.out.println(e);
}finally {
	System.out.println("hello im running");
}


	}

}
