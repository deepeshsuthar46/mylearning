package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.StudentInfoScheme;
import com.example.demo.services.CurdofStudents;

@CrossOrigin
@RestController
public class MyStudentController {
	
	@Autowired
	private CurdofStudents serviceCon;
	
	@GetMapping("/greeting")
	public ArrayList sayGrretings(){
		ArrayList abc=new ArrayList();
		abc.add("hello");
		return abc;
	}
	@GetMapping("/a")
	public String a(){
		return "1234";
	}
	@GetMapping("/save-data")
	public String saveStudent(StudentInfoScheme sch) {
//		sch.setName("abc");
		serviceCon.addStudentDaTa(sch,"abc");
		return "data saved";
	}

}
