package com.epam.meme.resource;

import com.epam.meme.dto.BoardDto;
import com.epam.meme.dto.UserDto;
import com.epam.meme.entity.Board;
import com.epam.meme.entity.User;
import com.epam.meme.service.BoardService;
import com.epam.meme.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    private ModelMapper modelMapper;

    @POST
    @ApiOperation(value = "Create user")
    public User create(@Valid UserDto userDto) {

        Optional<User> optionalUser;
        User user = convertToEntity(userDto);

        if (!(optionalUser = userService.findByUsername(user.getUsername())).isPresent()) {
           optionalUser = Optional.of(userService.create(user));
        }
        return optionalUser.get();
    }

    @GET
    @ApiOperation(value = "Find user by id")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{userId}")
    public UserDto findById(@PathParam("userId") Long userId) {
        User user = userService.findById(userId).orElseThrow(NotFoundException::new);
        UserDto userDto = convertToDto(user);
        userDto.setCountOfBoards(boardService.getUserBoardCount(userId));
        return userDto;
    }

    @GET
    @ApiOperation(value = "Find user's boards by user id")
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{userId}/boards")
    public List<BoardDto> findBoards(@PathParam("userId") Long userId,
                                     @QueryParam("page") int page,
                                     @QueryParam("pageSize") int pageSize) {
        Pageable pageable = PageRequest.of(page, pageSize);
        return userService.findUserBoards(userId, pageable).getContent().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @DELETE
    @ApiOperation(value = "Delete user by id")
    @Path("/{userId}")
    public void delete(@PathParam("userId") Long userId) {
        userService.deleteById(userId);
    }

//    @Path("/{userId}/votes")
//    public Class<VoteResource> findVotes(
//            @PathParam("userId")     long userId,
//            @QueryParam("startIndex") int startIndex,
//            @QueryParam("maxResults") int maxResults) {
//        return VoteResource.class;
//    }

    private UserDto convertToDto(User user) {
    return modelMapper.map(user, UserDto.class);
}

    private BoardDto convertToDto(Board board) {
    return modelMapper.map(board, BoardDto.class);
}

    private User convertToEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

}
