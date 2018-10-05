package com.epam.meme.dtoconverter;

import com.epam.meme.dto.VoteDto;
import com.epam.meme.entity.Vote;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VoteConverter {
    private final ModelMapper modelMapper;

    public VoteConverter(@Autowired ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Vote convertToEntity(VoteDto voteDto) {
        return modelMapper.map(voteDto, Vote.class);
    }
}
