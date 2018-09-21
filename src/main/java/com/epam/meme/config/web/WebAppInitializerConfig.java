package com.epam.meme.config.web;

import com.epam.meme.config.logic.ApplicationConfiguration;
import io.swagger.jersey.config.JerseyJaxrsConfig;
import org.glassfish.jersey.servlet.ServletContainer;
import org.springframework.core.annotation.Order;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import java.util.HashMap;
import java.util.Map;

@Order(1)
public class WebAppInitializerConfig implements WebApplicationInitializer {

    private static final String JERSEY_SERVLET_NAME = "PlanningServerApplication";
    private static final String SWAGGER_SERVLET_NAME = "Jersey2Config";
    private static final String URL_PATTERN = "/meme/*";
    private static final String RS_APPLICATION = "javax.ws.rs.Application";

    private static final String API_VERSION = "1.0.0";
    private static final String SWAGGER_BASE_PATH = "http://localhost:8081/meme";

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        servletContext.setInitParameter("contextConfigLocation", "");
        registerContextLoaderListener(servletContext);
        registerJerseyServlet(servletContext);
        registerSwaggerServlet(servletContext);
    }

    private void registerContextLoaderListener(ServletContext servletContext) {
        AnnotationConfigWebApplicationContext configWebApplicationContext =
                new AnnotationConfigWebApplicationContext();
        configWebApplicationContext.register(ApplicationConfiguration.class);
        configWebApplicationContext.setServletContext(servletContext);
        configWebApplicationContext.refresh();

        servletContext.addListener(new ContextLoaderListener(configWebApplicationContext));
        servletContext.addListener(new RequestContextListener());
    }



    private void registerJerseyServlet(ServletContext servletContext) {
        ServletRegistration.Dynamic servletRegistration = servletContext.addServlet(
                JERSEY_SERVLET_NAME,
                ServletContainer.class
        );
        servletRegistration.addMapping(URL_PATTERN);
        servletRegistration.setLoadOnStartup(1);

        servletRegistration.setInitParameter(
                RS_APPLICATION,
                MemeResourceConfiguration.class.getName());
    }

    private void registerSwaggerServlet(ServletContext servletContext) {
        ServletRegistration.Dynamic servletRegistration = servletContext.addServlet(
                SWAGGER_SERVLET_NAME,
                JerseyJaxrsConfig.class
        );
        servletRegistration.setLoadOnStartup(2);

        Map<String, String> swaggerInitParameters = new HashMap<>();
        swaggerInitParameters.put("api.version",API_VERSION);
        swaggerInitParameters.put("swagger.api.basepath",SWAGGER_BASE_PATH);

        servletRegistration.setInitParameters(swaggerInitParameters);
    }
}