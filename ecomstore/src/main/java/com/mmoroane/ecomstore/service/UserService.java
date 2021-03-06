package com.mmoroane.ecomstore.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mmoroane.ecomstore.model.User;
import com.mmoroane.ecomstore.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUser(String id) {
		return userRepository.findById(id).get();
	}
	
	/*
	public User getByName(String username) {
		List<User> allUsers = getAllUsers();
		
		for (User user: allUsers) {
			if (user.getName().equals(username) ) {
				return user;
			}
		}
		return null;
	}*/

	public void addUser(User user) {
		userRepository.save(user);
	}
	public void deleteUser(String id) {
		userRepository.deleteById(id);
	}

	public void updateUser(User user) {
		userRepository.save(user);
	}

}
