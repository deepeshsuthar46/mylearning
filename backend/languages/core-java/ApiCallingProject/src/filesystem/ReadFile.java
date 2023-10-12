package filesystem;

import java.io.File;
import java.util.Scanner;

public class ReadFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
var myfile=new File("src/idly.txt");
try {
	var data=new Scanner(myfile);
	while(data.hasNextLine()) {
		var mydata=data.nextLine();
		System.out.println(mydata);
	}
}catch(Exception e) {
	System.out.println(e);
}

	}

}
