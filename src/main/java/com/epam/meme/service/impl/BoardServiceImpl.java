package com.epam.meme.service.impl;

import com.epam.meme.entity.Board;
import com.epam.meme.repository.BoardRepository;
import com.epam.meme.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Override
    public Board create(Board entity) {
        entity.getUsers().add(entity.getAdmin());
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
}
