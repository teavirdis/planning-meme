package com.epam.meme.service;

import com.epam.meme.entity.Board;
import com.epam.meme.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface UserService extends BaseService<User> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Page<Board> findUserBoards(Long id, Pageable pageable);
    void updateByUsername(LocalDateTime curDate, String username);
    List<User> identifyDullUsers(LocalDateTime curDate);
}
