package com.mmoroane.ecomstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mmoroane.ecomstore.db.ItemRepository;
import com.mmoroane.ecomstore.model.Item;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepository itemRepository;
	
	public List<Item> getAllItems() {
		return itemRepository.findAll();
	}

	public Item getItem(int id) {
		return itemRepository.findById(id).get();
	}

	public void addItem(Item item) {
		itemRepository.save(item);
	}
	public void deleteItem(int id) {
		itemRepository.deleteById(id);
	}

	public void updateItem(Item item) {
		itemRepository.save(item);
	}

}
