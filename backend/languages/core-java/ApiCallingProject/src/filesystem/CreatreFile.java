package filesystem;

import java.io.File;

public class CreatreFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
File myfile=new File("src/idly2.txt");

try {
	myfile.createNewFile();
}catch(Exception e) {
	System.out.println(e);
}

	}

}
