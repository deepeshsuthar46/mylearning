package filesystem;

import java.io.File;
import java.io.FileWriter;

public class WriteFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try {
			var myfile1=new FileWriter("src/idly.txt");
			myfile1.write("hello shashi had idly");
			myfile1.close();
			System.out.println("i wroye in file");
		}catch(Exception e) {
			System.out.println(e);
		}
	}

}
