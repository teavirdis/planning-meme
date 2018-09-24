package com.epam.meme.filter;

import com.epam.meme.converter.UserConverter;
import com.epam.meme.dto.UserCookieDto;
import com.epam.meme.entity.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriUtils;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.util.Map;

@Provider
@PreMatching
@Component
public class MemeFilter implements ContainerRequestFilter {

    @Autowired
    private UserConverter userConverter;

    @Autowired
    private User currentUser;

    private static final String USER_PROP = "user";

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        Map<String, Cookie> cookies = requestContext.getCookies();

        Cookie cookie = cookies.get(USER_PROP);
        ObjectMapper objectMapper = new ObjectMapper();
        User user;
        if (cookie != null && cookie.getValue()!=null && !cookie.getValue().isEmpty()) {
            user = userConverter.convertToEntityFromCookieDto(objectMapper.readValue(
                    UriUtils.decode(cookie.getValue(), "UTF-8"), UserCookieDto.class
            ));
            currentUser.setId(user.getId());
            currentUser.setUsername(user.getUsername());
        }
    }


}