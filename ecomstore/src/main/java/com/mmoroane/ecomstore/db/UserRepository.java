package com.mmoroane.ecomstore.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mmoroane.ecomstore.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}
