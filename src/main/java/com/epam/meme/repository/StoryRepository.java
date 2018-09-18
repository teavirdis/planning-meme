package com.epam.meme.repository;

import com.epam.meme.entity.Story;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story, Long> {
    Page<Story> findAllByBoardId(long boardId, Pageable pageable);
}
