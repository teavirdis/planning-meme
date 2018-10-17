package com.epam.meme.websocket.endpoint;

import lombok.Getter;

import javax.websocket.Session;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Getter
public abstract class AbstractWebSocketEndPoint {
    private Set<Session> userSessions = Collections.synchronizedSet(new HashSet<>());

    public abstract void onOpen(Session userSession);

    public abstract void onClose(Session userSession);

    public abstract void onMessage(String msg);

    public abstract void onError(Throwable throwable);
}
