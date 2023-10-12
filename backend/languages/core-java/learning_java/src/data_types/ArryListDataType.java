package data_types;

import java.util.ArrayList;

public class ArryListDataType {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
ArrayList abc=new ArrayList();
System.out.println(abc.add("hello"));
abc.add("boll");
abc.add("cat");
abc.add(123);
abc.add(true);
String[] a={"apple"};
abc.add(a);

System.out.println(abc);

RistrictedArryList mem=new RistrictedArryList();
mem.checking();
	}

}


 class RistrictedArryList{

	void checking(){
		ArrayList<String> abc=new ArrayList<String>();
		abc.add("applew1");
		abc.add("applew2");
		abc.add("applew3");
		abc.forEach(
				(item)->{
			System.out.println("im working"+item);
		});
		System.out.println("im working"+abc);
		
	}
}
