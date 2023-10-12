package files12;

import java.io.File;
import java.io.IOException;

public class ReadFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String filename = "newFile.txt";
		String workingDirectory = System.getProperty("user.dir");
		System.out.println(workingDirectory);
		String absoluteFilePath = workingDirectory + File.separator + filename;
		System.out.println(absoluteFilePath);
		//File myObj = new File(absoluteFilePath);
		//		
		try {
		      File myObj = new File("testOne.txt");
		      if (myObj.createNewFile()) {
		        System.out.println("File created: " + myObj.getName());
		      } else {
		        System.out.println("File already exists.");
		      }
		    } catch (IOException e) {
		      System.out.println("An error occurred.");
		      e.printStackTrace();
		    }
	}

}
