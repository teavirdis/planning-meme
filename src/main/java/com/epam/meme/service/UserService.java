package com.epam.meme.service;

import com.epam.meme.entity.User;

import java.util.Optional;

public interface UserService extends BaseService<User> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
