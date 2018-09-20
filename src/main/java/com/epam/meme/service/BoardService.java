package com.epam.meme.service;

import com.epam.meme.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BoardService extends BaseService<Board> {
    Page<Board> findAll(Pageable pageable);
    int getUserBoardCount(Long id);
}
