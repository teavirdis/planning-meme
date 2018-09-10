package com.epam.meme.service.impl;

import com.epam.meme.entity.Vote;
import com.epam.meme.repository.VoteRepository;
import com.epam.meme.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class VoteServiceImpl implements VoteService {

    private VoteRepository repository;

    @Autowired
    public VoteServiceImpl(VoteRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(Vote entity) {
        repository.saveAndFlush(entity);
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Vote> findById(Long entityId) {
        return repository.findById(entityId);
    }

    @Override
    public void update(Vote entity) {
        repository.saveAndFlush(entity);
    }

    @Override
    public void delete(Vote entity) {
        repository.delete(entity);
    }

    @Override
    public void deleteById(Long entityId) {
        repository.deleteById(entityId);
    }
}
