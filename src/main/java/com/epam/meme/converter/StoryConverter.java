package com.epam.meme.converter;

import com.epam.meme.dto.StoryDto;
import com.epam.meme.entity.Story;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class StoryConverter {
    @Autowired
    private ModelMapper modelMapper;

    public Story convertToEntity(StoryDto storyDto) {
        return modelMapper.map(storyDto, Story.class);
    }

    public StoryDto convertToDto(Story story){
        return modelMapper.map(story, StoryDto.class);
    }
}
