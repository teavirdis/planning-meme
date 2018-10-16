package com.epam.meme.websocket.configurator;


import com.epam.meme.websocket.endpoint.AbstractWebSocketEndPoint;
import com.epam.meme.websocket.endpoint.FinishVotingEndPoint;
import com.epam.meme.websocket.endpoint.StartVotingEndpoint;

import javax.websocket.server.ServerEndpointConfig;
import java.util.HashMap;
import java.util.Map;

public class WebSocketConfigurator extends ServerEndpointConfig.Configurator {
    private Map<Class<? extends AbstractWebSocketEndPoint>, AbstractWebSocketEndPoint> configureMap;

    public WebSocketConfigurator() {
        this.configureMap = new HashMap<>();
        configureMap.put(StartVotingEndpoint.class, new StartVotingEndpoint());
        configureMap.put(FinishVotingEndPoint.class, new FinishVotingEndPoint());
    }


    @Override
    @SuppressWarnings("unchecked")
    public AbstractWebSocketEndPoint getEndpointInstance(Class endpointClass) throws InstantiationException {
        return configureMap.get(endpointClass);
    }
}




