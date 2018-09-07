package com.epam.meme.config.web;

import com.epam.meme.config.logic.ApplicationConfiguration;
import com.thetransactioncompany.cors.CORSFilter;
import org.glassfish.jersey.servlet.ServletContainer;
import org.springframework.core.annotation.Order;
import org.springframework.lang.NonNullApi;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

@Order(1)
public class WebAppInitializerConfig implements WebApplicationInitializer {

    private static final String DEV_PROFILE = "dev";
    private static final String SERVLET_NAME = "PlanningServerApplication";
    private static final String URL_PATTERN = "/meme/*";
    private static final String RS_APPLICATION = "javax.ws.rs.Application";

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        servletContext.setInitParameter("contextConfigLocation", "");
        registerContextLoaderListener(servletContext);

        ServletRegistration.Dynamic servletRegistration = servletContext.addServlet(
                SERVLET_NAME,
                ServletContainer.class
        );
        servletRegistration.addMapping(URL_PATTERN);
        servletRegistration.setLoadOnStartup(1);

        servletRegistration.setInitParameter(
                RS_APPLICATION,
                MemeResourceConfiguration.class.getName());
    }

    private void registerContextLoaderListener(ServletContext servletContext) {
        AnnotationConfigWebApplicationContext configWebApplicationContext =
                new AnnotationConfigWebApplicationContext();
        configWebApplicationContext.register(ApplicationConfiguration.class);
        configWebApplicationContext.getEnvironment().setActiveProfiles(DEV_PROFILE);
        configWebApplicationContext.setServletContext(servletContext);
        configWebApplicationContext.refresh();

        servletContext.addListener(new ContextLoaderListener(configWebApplicationContext));
    }

}
