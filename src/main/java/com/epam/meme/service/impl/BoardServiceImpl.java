package com.epam.meme.service.impl;

import com.epam.meme.entity.Board;
import com.epam.meme.repository.BoardRepository;
import com.epam.meme.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BoardServiceImpl implements BoardService {

    private BoardRepository repository;

    @Autowired
    public BoardServiceImpl(BoardRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(Board entity) {
        repository.saveAndFlush(entity);
    }

    @Transactional(readOnly = true)
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

    @Override
    public void deleteById(Long entityId) {
        repository.deleteById(entityId);
    }

    @Override
    public Page<Board> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
