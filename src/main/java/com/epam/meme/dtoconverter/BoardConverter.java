package com.epam.meme.dtoconverter;

import com.epam.meme.dto.BoardDto;
import com.epam.meme.entity.Board;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BoardConverter {
    private final ModelMapper modelMapper;

    public BoardConverter(@Autowired ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public BoardDto convertToDto(Board board) {
        return modelMapper.map(board, BoardDto.class);
    }

    public Board convertToEntity(BoardDto boardDto) {
        return modelMapper.map(boardDto, Board.class);
    }
}
