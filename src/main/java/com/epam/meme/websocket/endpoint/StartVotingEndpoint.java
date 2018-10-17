package com.epam.meme.websocket.endpoint;

import com.epam.meme.websocket.configurator.WebSocketConfigurator;
import lombok.extern.slf4j.Slf4j;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;

@Slf4j
@ServerEndpoint(value = "/meme/start", configurator = WebSocketConfigurator.class)
public class StartVotingEndpoint extends AbstractWebSocketEndPoint {

    @OnOpen
    public void onOpen(Session userSession) {
        getUserSessions().add(userSession);
    }

    @OnClose
    public void onClose(Session userSession) {
        System.out.println("User session: " + userSession.getId() + " has been terminated.");
        getUserSessions().remove(userSession);
    }

    @OnMessage
    public void onMessage(String msg) {
        for (Session session : getUserSessions()) {
            System.out.println(session.getId() + " has been notified with message " + msg + "...");
            session.getAsyncRemote().sendText(msg);
        }
    }

    @OnError
    public void onError(Throwable throwable) {
        log.error(throwable.getLocalizedMessage());
    }
}
