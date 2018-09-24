package com.epam.meme.resource;

import com.epam.meme.converter.BoardConverter;
import com.epam.meme.converter.UserConverter;
import com.epam.meme.dto.UserCookieDto;
import com.epam.meme.dto.UserDto;
import com.epam.meme.entity.User;
import com.epam.meme.service.BoardService;
import com.epam.meme.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.yaml.snakeyaml.util.UriEncoder;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import java.util.Optional;

@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Api(value = "/users", description = "Manage users")
public class UserResource {

    @Autowired
    private UserService userService;

    @Autowired
    private BoardService boardService;

    @Autowired
    private UserConverter userConverter;

    @Autowired
    private User currentUser;

    @Autowired
    private BoardConverter boardConverter;

    @POST
    @ApiOperation(value = "Create user")
    public Response create(@Valid UserDto userDto) throws JsonProcessingException {

        Optional<User> optionalUser;
        User user = userConverter.convertToEntity(userDto);

        if (!(optionalUser = userService.findByUsername(user.getUsername())).isPresent()) {
            optionalUser = Optional.of(userService.create(user));
        }
        UserCookieDto userCookieDto = userConverter.convertToCookieDto(optionalUser.orElseThrow(NotFoundException::new));

        ObjectMapper objectMapper = new ObjectMapper();
        String userJson = objectMapper.writeValueAsString(userCookieDto);

        return Response
                .ok(userCookieDto)
                .header("Set-Cookie", "userAccessToken=toke;lang=en-US; Path=*; Domain=localhost")
                .cookie(new NewCookie("user", UriEncoder.encode(userJson.replace(',','|'))))
                .build();
    }

    @GET
    @ApiOperation(value = "Find user by id")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/current-user")
    public UserDto findById() {
        User user = userService.findById(currentUser.getId()).orElseThrow(NotFoundException::new);
        UserDto userDto = userConverter.convertToDto(user);
        userDto.setCountOfBoards(boardService.getUserBoardCount(currentUser.getId()));
        return userDto;
    }

    @Path("/current-user/boards")
    public Class<BoardResource> boardResource() {
        return BoardResource.class;
    }

    @Path("{boardId}/stories")
    public Class<StoryResource> storyResource() {
        return StoryResource.class;
    }

    @DELETE
    @ApiOperation(value = "Delete user by id")
    @Path("/current-user")
    public void delete() {
        userService.deleteById(currentUser.getId());
    }

//    @Path("/{userId}/votes")
//    public Class<VoteResource> findVotes(
//            @PathParam("userId")     long userId,
//            @QueryParam("startIndex") int startIndex,
//            @QueryParam("maxResults") int maxResults) {
//        return VoteResource.class;
//    }
}
