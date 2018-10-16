package com.epam.meme.websocket.endpoint;

import com.epam.meme.websocket.configurator.WebSocketConfigurator;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;


@ServerEndpoint(value = "/meme/start", configurator = WebSocketConfigurator.class)
public class StartVotingEndpoint extends AbstractWebSocketEndPoint{

    @OnOpen
    public void onOpen(Session userSession) {
        getUserSessions().add(userSession);
    }

    @OnClose
    public void onClose(Session userSession) {
        System.out.println("User session: "+userSession.getId()+" has been terminated.");
        getUserSessions().remove(userSession);
    }

    @OnMessage
    public void onMessage(String msg) {
        for (Session session : getUserSessions()) {
            System.out.println(session.getId()+" has been notified...");
            session.getAsyncRemote().sendText(msg);
        }
    }
}
