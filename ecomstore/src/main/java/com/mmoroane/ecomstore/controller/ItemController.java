package com.mmoroane.ecomstore.controller;

import java.awt.print.Book;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mmoroane.ecomstore.db.ItemRepository;
import com.mmoroane.ecomstore.model.Item;
import com.mmoroane.ecomstore.service.ItemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "items")
public class ItemController {

	@Autowired
	private ItemService itemService;
	private ItemRepository itemRepository;
	
	private byte[] bytes;
	
	@RequestMapping(value = "/get",  method = RequestMethod.GET, produces = "application/json")
	public List<Item> getItems() {
		return itemService.getAllItems();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Item getItem(@PathVariable int id) {
		return itemService.getItem(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/add")
	public void addItem(@RequestBody Item item) throws IOException {
		itemService.addItem(item);
		item.setPicByte(this.bytes);
		//itemRepository.save(item);
		this.bytes = null;
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public void updateItem(@RequestBody Item item, @PathVariable int id) {
		itemService.updateItem(item);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
	public void deleteItem(@PathVariable int id) {
		itemService.deleteItem(id);
	}
	
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}
	
	/*@PostMapping("/add")
	public void createBook(@RequestBody Item item) throws IOException {
		item.setPicByte(this.bytes);
		itemRepository.save(item);
		this.bytes = null;
	}*/
}
