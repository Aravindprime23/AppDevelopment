package com.aravind.online_grocery_store.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aravind.online_grocery_store.Entity.GroceryEntity;

public interface Repository extends JpaRepository<GroceryEntity,Long> {

	

}