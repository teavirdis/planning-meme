package com.epam.meme.resource;

import com.epam.meme.entity.Story;
import com.epam.meme.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;

public class StoryResource {
    @Autowired
    private StoryService storyService;

    @POST
    public void addStory(Story story) {
        //TODO storyService.addStory ...
    }

    @GET
    public void defineStories(@QueryParam("startIndex") long startIndex, @QueryParam("maxResult") long maxResult){
        //TODO realize needed method
    }

    @GET
    @Path("/{id}")
    public Story defineStory(@PathParam("id") long storyId) {
        return storyService.findById(storyId).get();
    }

    @PUT
    @Path("/{id}")
    public void updateStory(@PathParam("id") long storyId) {
        Story story = storyService.findById(storyId).get();
        storyService.update(story);
    }

    @Path("/{id}/votes")
    public VoteResource defineVoteResource(){
        return new VoteResource();
    }

    @DELETE
    @Path("/{id}")
    public void deleteStory(@PathParam("id") long storyId) {
        Story story = storyService.findById(storyId).get();
        storyService.delete(story);
    }
}
