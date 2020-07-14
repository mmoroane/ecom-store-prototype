package com.mmoroane.ecomstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mmoroane.ecomstore.db.UserRepository;
import com.mmoroane.ecomstore.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUser(int id) {
		return userRepository.findById(id).get();
	}

	public void addUser(User user) {
		userRepository.save(user);
	}
	public void deleteUser(int id) {
		userRepository.deleteById(id);
	}

	public void updateUser(User user) {
		userRepository.save(user);
	}

}
