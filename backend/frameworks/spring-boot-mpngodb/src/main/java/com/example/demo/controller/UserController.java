package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
//@RestController
@Controller 
public class UserController {
// what and all the data can e given by api
	@GetMapping("/test-string")
	public String test() {
		return "testing is working";
	}
	@GetMapping("/test-char")
	public char testChar() {
		return 's';
	}
	@GetMapping("/test-arrylist")
	public ArrayList testArryList() {
		var a=new Abc();
		var data=new ArrayList();
		var data2=new HashMap();
		data2.put("a", "apple");
		data.add("apple");
		data.add("boll");
		data.add(123);
		data.add('a');
		data.add(data2);
		
		return data;
	}
	
	@GetMapping("/register")
	public String register(@RequestParam(defaultValue="") String name,@RequestParam(defaultValue="") String email) {
		System.out.println(name+ "   "+email);
		String ne=name+" "+email;
		return ne;
		}
	@GetMapping("/test")
	public String test1() {

		return "test";
		}
	
}
class Abc{}
