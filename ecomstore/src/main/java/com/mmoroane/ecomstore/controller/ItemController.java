package com.mmoroane.ecomstore.controller;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mmoroane.ecomstore.model.Item;
import com.mmoroane.ecomstore.repository.ItemRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "items")
public class ItemController {

	@Autowired
	private ItemRepository itemRepository;
	
	private byte[] bytes;
	
	@GetMapping("/get")
	public List<Item> getItems() {
		return itemRepository.findAll();
	}

	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}

	@PostMapping("/add")
	public void createItem(@RequestBody Item item) throws IOException {
		item.setPicByte(this.bytes);
		itemRepository.save(item);
		this.bytes = null;
	}

	@PutMapping("/update")
	public void updateItem(@RequestBody Item item) {
		itemRepository.save(item);
	}

	@DeleteMapping(path = { "/{id}" })
	public Item deleteItem(@PathVariable("id") int id) {
		Item item = itemRepository.getOne(id);
		itemRepository.deleteById(id);
		return item;
	}
	
	@PutMapping("/update")
	public void updateBook(@RequestBody Item item) {
		itemRepository.save(item);
	}
}
