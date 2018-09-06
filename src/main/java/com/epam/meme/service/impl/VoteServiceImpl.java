package com.epam.meme.service.impl;

import com.epam.meme.entity.Vote;
import com.epam.meme.repository.VoteRepository;
import com.epam.meme.service.VoteService;

import java.util.Optional;

public class VoteServiceImpl implements VoteService {

    private VoteRepository repository;

    public VoteServiceImpl(VoteRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(Vote entity) {
        repository.saveAndFlush(entity);
    }

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
}
