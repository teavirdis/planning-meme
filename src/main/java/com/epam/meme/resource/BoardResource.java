package com.epam.meme.resource;

import com.epam.meme.entity.Board;
import com.epam.meme.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;

@Path("/boards")
public class BoardResource {

    @Autowired
    private BoardService boardService;

    @POST
    public void addBoard(Board board){
        boardService.create(board);
    }

    @Path("{id}/stories")
    public StoryResource defineStoryResource(@PathParam("id") long boardId){
        return new StoryResource();
    }

    @GET
    @Path("/{id}")
    public Board defineBoard(@PathParam("id") long boardId){
        return boardService.findById(boardId).get();
    }

    @PUT
    @Path("/{id}")
    public void updateBoard(@PathParam("id") long boardId){
        Board board = boardService.findById(boardId).get();
        boardService.update(board);
    }

    @DELETE
    @Path("/{id}")
    public void deleteBoard(@PathParam("id") long boardId){
        Board board = boardService.findById(boardId).get();
        boardService.delete(board);
    }
}
