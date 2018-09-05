package com.epam.meme.config.web;

import com.epam.meme.config.logic.ApplicationConfiguration;
import com.thetransactioncompany.cors.CORSFilter;
import org.glassfish.jersey.servlet.ServletContainer;
import org.springframework.lang.NonNullApi;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;

public class WebAppInitializerConfig implements WebApplicationInitializer {
    private static final String TEST_PROFILE = "test";
    private static final String RUNTIME_PROFILE = "runtime";
    private static final String SERVLET_NAME = "PlanningServerApplication";
    private static final String URL_PATTERN = "/meme/*";
    private static final String RS_APPLICATION = "javax.ws.rs.Application";
    private static final String CORS_FILTER_NAME = "CORS";

    @Override
    public void onStartup(ServletContext servletContext) {
        //TODO find more pretty solution for web initializer
        servletContext.addListener(ContextLoaderListener.class);

        AnnotationConfigWebApplicationContext configWebApplicationContext = new AnnotationConfigWebApplicationContext();
        configWebApplicationContext.register(ApplicationConfiguration.class);
        configWebApplicationContext.getEnvironment().setActiveProfiles(TEST_PROFILE);
        configWebApplicationContext.setServletContext(servletContext);
        configWebApplicationContext.refresh();

        ServletRegistration.Dynamic servletRegistration = servletContext.addServlet(
                SERVLET_NAME,
                ServletContainer.class.getName()
        );

        servletRegistration.addMapping(URL_PATTERN);
        servletRegistration.setLoadOnStartup(1);
        servletRegistration.setInitParameter(RS_APPLICATION, MemeResourceConfiguration.class.getName());

        FilterRegistration.Dynamic filter = servletContext.addFilter(CORS_FILTER_NAME, CORSFilter.class);

        //TODO replace initParameter to initParameters(map)
        filter.setInitParameter("cors.allowOrigin", "*");
        filter.setInitParameter("cors.supportsCredentials", "false");
        filter.setInitParameter("cors.supportedHeaders", "Accept, Authorization, Origin, X-Requested-With, Content-Type, Last-Modified");
        filter.setInitParameter("cors.supportedMethods", "GET, POST, PUT, DELETE, HEAD, OPTIONS");

        filter.addMappingForServletNames(null, true, SERVLET_NAME);
    }
}
