package com.epam.meme.service.impl;

import com.epam.meme.entity.User;
import com.epam.meme.repository.UserRepository;
import com.epam.meme.service.UserService;

import java.util.Optional;

public class UserServiceImpl implements UserService {

    private UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(User user) {
        repository.saveAndFlush(user);
    }

    @Override
    public Optional<User> findById(Long userId) {
        return repository.findById(userId);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public void update(User user) {
        repository.saveAndFlush(user);
    }

    @Override
    public void delete(User user) {
        repository.delete(user);
    }
}
