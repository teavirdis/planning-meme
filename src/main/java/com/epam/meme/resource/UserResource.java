package com.epam.meme.resource;

import com.epam.meme.dto.UserDto;
import com.epam.meme.entity.User;
import com.epam.meme.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Optional;

@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Api(value = "/users", description = "Manage users")
public class UserResource {

    @Autowired
    private UserService userService;

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
    public User findById(@PathParam("userId") Long userId) {
        return userService.findById(userId).orElseThrow(NotFoundException::new);
    }

//    @PUT
//    @Path("/{userId}")
//    public void update(@PathParam("userId") Long userId) {
//        User user = userService.findById(userId).get();
//        userService.update(user);
//    }

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

    private User convertToEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }

}
