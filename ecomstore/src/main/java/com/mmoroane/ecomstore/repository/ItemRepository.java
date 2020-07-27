package com.mmoroane.ecomstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mmoroane.ecomstore.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
