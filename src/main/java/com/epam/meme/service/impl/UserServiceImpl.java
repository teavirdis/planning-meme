package com.epam.meme.service.impl;

import com.epam.meme.entity.Board;
import com.epam.meme.entity.User;
import com.epam.meme.repository.UserRepository;
import com.epam.meme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public User create(User user) {
        return repository.saveAndFlush(user);
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

    @Override
    public void deleteById(Long entityId) {
        repository.deleteById(entityId);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Board> findUserBoards(Long id, Pageable pageable) {
        return repository.findUserBoards(id, pageable);
    }
}
