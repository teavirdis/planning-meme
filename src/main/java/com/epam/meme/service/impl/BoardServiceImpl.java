package com.epam.meme.service.impl;

import com.epam.meme.entity.Board;
import com.epam.meme.entity.User;
import com.epam.meme.repository.BoardRepository;
import com.epam.meme.service.BoardService;
import com.epam.meme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserService userService;

    @Override
    public Board create(Board entity) {
        entity.getUsers().add(entity.getAdmin());
        entity.setId(null);
        entity.setStartTime(LocalDateTime.now());
        return boardRepository.saveAndFlush(entity);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Board> findById(Long entityId) {
        return boardRepository.findById(entityId);
    }

    @Override
    public void update(Board entity) {
        boardRepository.saveAndFlush(entity);
    }

    @Override
    public void delete(Board entity) {
        boardRepository.delete(entity);
    }

    @Override
    public void deleteById(Long entityId) {
        boardRepository.deleteById(entityId);
    }

    @Override
    public Page<Board> findAll(Pageable pageable) {
        return boardRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    public int getUserBoardCount(Long id) {
        return boardRepository.countAllByAdminId(id);
    }

    @Override
    public void addMember(Long boardId, Long newMemberId) {
        Optional<User> foundUser = userService.findById(newMemberId);
        Optional<Board> foundBoard = findById(boardId);
        foundBoard.orElseThrow(IllegalArgumentException::new)
                .getUsers().add(
                        foundUser.orElseThrow(IllegalArgumentException::new));
    }
}
