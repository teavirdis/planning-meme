package com.epam.meme.service;

import com.epam.meme.entity.Story;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface StoryService extends BaseService<Story> {
    Page<Story> findAll(Pageable pageable);
}
