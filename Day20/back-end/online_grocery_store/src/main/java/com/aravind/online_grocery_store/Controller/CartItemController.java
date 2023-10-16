package com.aravind.online_grocery_store.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aravind.online_grocery_store.Entity.CartItem;
import com.aravind.online_grocery_store.Service.CartItemService;



@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartItemController {

	private final CartItemService cartItemService;

    @Autowired
    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @GetMapping
    public List<CartItem> getAllItems() {
        return cartItemService.getAllItems();
    }

    @PostMapping
    public CartItem addItem(@RequestBody CartItem cartItem) {
        return cartItemService.addItem(cartItem);
    }

    @PutMapping("/{itemId}")
    public CartItem updateItem(@PathVariable Long itemId, @RequestBody CartItem cartItem) {
        return cartItemService.updateItem(itemId, cartItem);
    }

    @DeleteMapping("/{itemId}")
    public void removeItem(@PathVariable Long itemId) {
        cartItemService.removeItem(itemId);
    }

    @DeleteMapping("/clear")
    public void clearCart() {
        cartItemService.clearCart();
    }
}