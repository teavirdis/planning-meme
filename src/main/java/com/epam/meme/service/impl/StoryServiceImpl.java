package com.epam.meme.service.impl;

import com.epam.meme.entity.Story;
import com.epam.meme.repository.StoryRepository;
import com.epam.meme.service.StoryService;

import java.util.Optional;

public class StoryServiceImpl implements StoryService {

    private StoryRepository repository;

    public StoryServiceImpl(StoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(Story entity) {
        repository.saveAndFlush(entity);
    }

    @Override
    public Optional<Story> findById(Long entityId) {
        return repository.findById(entityId);
    }

    @Override
    public void update(Story entity) {
        repository.saveAndFlush(entity);
    }

    @Override
    public void delete(Story entity) {
        repository.delete(entity);
    }
}
