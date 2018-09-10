package com.epam.meme.resource;

import com.epam.meme.dto.UserDto;
import com.epam.meme.entity.User;
import com.epam.meme.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @POST
    public void create(@Valid UserDto userDto) {
        userService.create(convertToEntity(userDto));
    }

    @GET
    @Path("/{userId}")
    public User findById(@PathParam("userId") Long userId) {
        return userService.findById(userId).get();
    }

//    @PUT
//    @Path("/{userId}")
//    public void update(@PathParam("userId") Long userId) {
//        User user = userService.findById(userId).get();
//        userService.update(user);
//    }

    @DELETE
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
