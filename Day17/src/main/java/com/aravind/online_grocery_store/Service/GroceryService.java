package com.aravind.online_grocery_store.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aravind.online_grocery_store.Entity.GroceryEntity;
import com.aravind.online_grocery_store.Repository.Repository;

@Service
public class GroceryService {

	@Autowired
	Repository groceryRepository;
	
	public List<GroceryEntity> getAllGroceryEntity() {
		return groceryRepository.findAll();
	}
	
	public GroceryEntity getgroceryEntityById(Long groceryEntityId) {
		Optional<GroceryEntity> groceryEntityOptional = groceryRepository.findById(groceryEntityId);
		return groceryEntityOptional.orElse(null);
	}
	
	public GroceryEntity savegroceryEntity(GroceryEntity groceryEntity) {
		return groceryRepository.save(groceryEntity);
	}
	
	public void deletegroceryEntity(Long groceryEntityId) {
		groceryRepository.deleteById(groceryEntityId);
	}
}