package com.epam.meme.service.impl;

import com.epam.meme.entity.User;
import com.epam.meme.repository.UserRepository;
import com.epam.meme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private UserRepository repository;

    @Autowired
    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(User user) {
        repository.saveAndFlush(user);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findById(Long userId) {
        return repository.findById(userId);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Transactional(readOnly = true)
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
