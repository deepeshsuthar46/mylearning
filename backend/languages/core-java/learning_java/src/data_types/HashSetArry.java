package data_types;

import java.util.HashMap;
import java.util.HashSet;

public class HashSetArry {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap mem2=new HashMap();
		mem2.put('a', "apple");
HashSet mem=new HashSet();
mem.add(mem2);
mem.add("hello2");
//let myapidata=[{key:'hh'}]
System.out.println(mem);
	}

}
