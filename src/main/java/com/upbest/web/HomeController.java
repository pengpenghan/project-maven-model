package com.upbest.web;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
 
	@RequestMapping(value = {"/index","/"})
	public String toSystemFirstPage(HttpSession session, Model model) {
		logger.debug("ok");
		return "index";
	}
	
	 
}
