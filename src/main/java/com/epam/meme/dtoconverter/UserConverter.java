package com.epam.meme.dtoconverter;

import com.epam.meme.dto.UserCookieDto;
import com.epam.meme.dto.UserDto;
import com.epam.meme.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    private final ModelMapper modelMapper;

    public UserConverter(@Autowired ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public User convertToEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

    public UserCookieDto convertToCookieDto(User user) {
        return modelMapper.map(user, UserCookieDto.class);
    }

    public UserDto convertToDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

    public User convertToEntityFromCookieDto(UserCookieDto userCookieDto){
        return modelMapper.map(userCookieDto, User.class);
    }
}
