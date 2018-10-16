package com.epam.meme.websocket.endpoint;

import com.epam.meme.websocket.configurator.WebSocketConfigurator;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;


@ServerEndpoint(value = "/meme/finish", configurator = WebSocketConfigurator.class)
public class FinishVotingEndPoint extends AbstractWebSocketEndPoint{

    @OnOpen
    public void onOpen(Session userSession) {
        getUserSessions().add(userSession);
    }

    @OnClose
    public void onClose(Session userSession) {
        getUserSessions().remove(userSession);
    }

    @OnMessage
    public void onMessage(String msg) {
        for (Session session : getUserSessions()) {
            session.getAsyncRemote().sendText(msg);
        }
    }
}
