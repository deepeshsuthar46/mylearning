package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ServerSideRenderingController {
	
	@GetMapping("/home")
	public String home() {
		return "home";
	}
	
	@GetMapping("/about")
	public String about() {
		return "about";
	}

}
