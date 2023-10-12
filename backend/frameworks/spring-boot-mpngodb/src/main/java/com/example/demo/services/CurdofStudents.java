package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.StudentInfoScheme;
import com.example.demo.repository.StudentConnectorSchemaDb;

@Service
public class CurdofStudents {

	@Autowired
 private StudentConnectorSchemaDb con;
	
public StudentInfoScheme	addStudentDaTa(StudentInfoScheme sch,String a ){
	sch.setName(a);
	sch.setChocalate("kitkat");
	return con.save(sch);
}
}
