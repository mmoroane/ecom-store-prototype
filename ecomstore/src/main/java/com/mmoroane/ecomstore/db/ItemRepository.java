package com.mmoroane.ecomstore.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mmoroane.ecomstore.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
