package com.epam.meme.service.impl;

import com.epam.meme.entity.Story;
import com.epam.meme.repository.StoryRepository;
import com.epam.meme.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class StoryServiceImpl implements StoryService {

    private StoryRepository repository;

    @Autowired
    public StoryServiceImpl(StoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(Story entity) {
        repository.saveAndFlush(entity);
    }

    @Override
    @Transactional(readOnly = true)
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

    @Override
    public void deleteById(Long entityId) {
        repository.deleteById(entityId);
    }

    @Override
    public Page<Story> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
