package com.epam.meme.repository;

import com.epam.meme.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select user from User user where user.username = :username")
    Optional<User> findByUsername(@Param("username") String username);

    @Query("select user from User user where user.email = :email")
    Optional<User> findByEmail(@Param("email") String email);

}
