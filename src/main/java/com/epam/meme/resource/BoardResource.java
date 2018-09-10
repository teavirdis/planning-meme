package com.epam.meme.resource;

import com.epam.meme.dto.BoardDto;
import com.epam.meme.entity.Board;
import com.epam.meme.service.BoardService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import javax.ws.rs.*;

@Path("/boards")
public class BoardResource {

    @Autowired
    private BoardService boardService;

    @Autowired
    private ModelMapper modelMapper;

    @POST
    public void create(@Valid BoardDto boardDto){
        boardService.create(convertToEntity(boardDto));
    }

    @GET
    @Path("/{boardId}")
    public Board findById(@PathParam("boardId") Long boardId){
        return boardService.findById(boardId).get();
    }

    @PUT
    @Path("/{boardId}")
    public void update(@PathParam("boardId") Long boardId, BoardDto boardDto){
        Board board = boardService.findById(boardId).get();
        if (boardDto.getName() != null) {
            board.setName(boardDto.getName());
            boardService.update(board);
        }
    }

    @DELETE
    @Path("/{boardId}")
    public void delete(@PathParam("boardId") Long boardId){
        boardService.deleteById(boardId);
    }

    @Path("{boardId}/stories")
    public Class<StoryResource> storyResource(){
        return StoryResource.class;
    }

    private Board convertToEntity(BoardDto boardDto) {
        return modelMapper.map(boardDto, Board.class);
    }
}
