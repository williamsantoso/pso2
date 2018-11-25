package com.hobby.pso2.domain;

import com.hobby.pso2.util.model.Status;

public class Affix extends Status {
	private String id;
	private String name;
	
	public Affix() {
		super();
		this.id = "";
		this.name = "";
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Affix [id=" + id + ", name=" + name + "]";
	}
}
