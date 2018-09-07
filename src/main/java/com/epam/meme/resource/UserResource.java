package com.epam.meme.resource;

import com.epam.meme.entity.User;
import com.epam.meme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {

    @Autowired
    private UserService userService;

    @POST
    public void create(User user) {
        userService.create(user);
    }

    @GET
    @Path("/{userId}")
    public User findById(@PathParam("userId") long userId) {
        return userService.findById(userId).get();
    }

    /*@PUT
    @Path("/{id}")
    public void updateUser(@PathParam("id") long userId) {
        User user = userService.findById(userId).get();
        userService.update(user);
    }*/

    @DELETE
    @Path("/{userId}")
    public void delete(@PathParam("userId") long userId) {
        User user = userService.findById(userId).get();
        userService.delete(user);
    }

    @Path("/{userId}/votes")
    public Class<VoteResource> findVotes(
            @PathParam("userId")     long userId,
            @QueryParam("startIndex") int startIndex,
            @QueryParam("maxResults") int maxResults) {
        return VoteResource.class;
    }
}
