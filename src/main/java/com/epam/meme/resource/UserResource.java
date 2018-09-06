package com.epam.meme.resource;

import com.epam.meme.entity.User;
import com.epam.meme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;

@Path("/users")
public class UserResource {

    @Autowired
    private UserService userService;

    @POST
    public void addUser(User user) {
        userService.create(user);
    }

    @GET
    @Path("/{id}")
    public User defineUser(@PathParam("id") long userId) {
        return userService.findById(userId).get();
    }

    @PUT
    @Path("/{id}")
    public void updateUser(@PathParam("id") long userId) {
        User user = userService.findById(userId).get();
        userService.update(user);
    }

    @DELETE
    @Path("/{id}")
    public void deleteUser(@PathParam("id") long userId) {
        User user = userService.findById(userId).get();
        userService.delete(user);
    }

    @Path("/votes")
    public VoteResource defineVotes(@QueryParam("startIndex") long startIndex, @QueryParam("maxRes") long maxRes) {
        return new VoteResource();
    }
}
