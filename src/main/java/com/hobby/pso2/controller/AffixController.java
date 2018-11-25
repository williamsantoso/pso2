package com.hobby.pso2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hobby.pso2.domain.Affix;

@RestController
@RequestMapping("/affix")
public class AffixController {
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<Boolean> save(@RequestBody String data) {
		try {
			Affix affix = new ObjectMapper().readValue(data, Affix.class);
			System.out.println(affix.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity<Boolean>(HttpStatus.OK);
	}
}
