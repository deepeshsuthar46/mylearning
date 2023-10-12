package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.StudentInfoScheme;

public interface StudentConnectorSchemaDb  extends MongoRepository<StudentInfoScheme, String>{

}
