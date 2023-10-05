package com.aravind.online_grocery_store.Controller;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aravind.online_grocery_store.Entity.GroceryEntity;
import com.aravind.online_grocery_store.Repository.Repository;



@CrossOrigin("*")
@RestController
@RequestMapping("/Grocery")
public class Controller {

    @Autowired
    private Repository groceryRepository;
    @GetMapping(value="/get")
    public Iterable<GroceryEntity> getAllGroceryEntity(){
        return groceryRepository.findAll();
    }
    	
   
    @PostMapping("/post")
    public GroceryEntity createtata(@RequestBody GroceryEntity ad) {
        return groceryRepository.save(ad);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<GroceryEntity>> getById(@PathVariable  Long id){
        Optional<GroceryEntity> ac = groceryRepository.findById(id);
        return ResponseEntity.ok(ac);
    }

    @PutMapping("/update/{id}")
	public GroceryEntity updateGroceryEntityDetails(@RequestBody GroceryEntity b,@PathVariable Long id)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		
		b.setid(id);
		return groceryRepository.save(b);		
	}
    @DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable Long id)
	{
    	groceryRepository.deleteById(id);
		return null;
	}
}