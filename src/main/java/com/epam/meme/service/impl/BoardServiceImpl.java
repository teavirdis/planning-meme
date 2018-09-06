package com.epam.meme.service.impl;

import com.epam.meme.entity.Board;
import com.epam.meme.repository.BoardRepository;
import com.epam.meme.service.BoardService;

import java.util.Optional;

public class BoardServiceImpl implements BoardService {

    private BoardRepository repository;

    public BoardServiceImpl(BoardRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(Board entity) {
        repository.saveAndFlush(entity);
    }

    @Override
    public Optional<Board> findById(Long entityId) {
        return repository.findById(entityId);
    }

    @Override
    public void update(Board entity) {
        repository.saveAndFlush(entity);
    }

    @Override
    public void delete(Board entity) {
        repository.delete(entity);
    }
}
