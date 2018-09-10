package com.epam.meme.resource;

import com.epam.meme.dto.VoteDto;
import com.epam.meme.entity.Vote;
import com.epam.meme.service.VoteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;

public class VoteResource {
    @Autowired
    private VoteService voteService;

    @Autowired
    private ModelMapper modelMapper;

    @GET
    public void defineVotes(@QueryParam("startIndex") long startIndex, @QueryParam("maxResult") long maxResult){
        //TODO realize needed methods...
    }
    @GET
    public void defineVotes(){
        //TODO realize requirement methods...
    }

    @POST
    public void addVotes(VoteDto voteDto){
        voteService.create(convertToEntity(voteDto));
    }

    @GET
    @Path("/{id}")
    public Vote defineVote(@PathParam("id") long id){
        return voteService.findById(id).get();
    }

    @PUT
    @Path("/{id}")
    public void updaterVote(@PathParam("id") long id){
        Vote vote = voteService.findById(id).get();
        voteService.update(vote);
    }

    private Vote convertToEntity(VoteDto voteDto) {
        return modelMapper.map(voteDto, Vote.class);
    }
}
