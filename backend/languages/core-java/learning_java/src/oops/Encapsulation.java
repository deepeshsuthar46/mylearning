package oops;

public class Encapsulation{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Saurabbi data=new Saurabbi();
		//System.out.println(data.balance);
		//Auth au=new Auth();
		data.setBalance(0);
		System.out.println(data.getBalance());
	}

}
class Saurabbi{
	String accName="saurabbi";
	int accNo=1234567;
	private int balance=200;
	void setBalance(int m) {
		this.balance=m;
	}
	int getBalance() {
		return this.balance;
	}
}
 abstract class Auth{
	String loginId="sa1234";
			String pass="1234";
			String hint="one two";
			
			
}
