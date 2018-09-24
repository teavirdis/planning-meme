package com.epam.meme.converter;

import com.epam.meme.dto.VoteDto;
import com.epam.meme.entity.Vote;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VoteConverter {
    @Autowired
    private ModelMapper modelMapper;

    public Vote convertToEntity(VoteDto voteDto) {
        return modelMapper.map(voteDto, Vote.class);
    }
}
