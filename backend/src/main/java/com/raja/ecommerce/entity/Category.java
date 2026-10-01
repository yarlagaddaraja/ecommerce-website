package com.raja.ecommerce.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class Category {
    @Id
    @GeneratedValue
	private Long id;
    private String name;
    public Category() {
    	
    }
    public Long getId() {
        return id;
    }
    public String getName() {
    	return name;
    }
    public void setName(String name) {
    	this.name=name;
    }
}
