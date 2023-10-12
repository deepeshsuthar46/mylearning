package filesystem;

import java.io.File;

public class Delete {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
var myfile=new File("src/idly2.txt");
if( myfile.delete()) {
	System.out.println("file delited");
}
	}

}
