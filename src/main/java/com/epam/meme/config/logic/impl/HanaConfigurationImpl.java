package com.epam.meme.config.logic.impl;

import com.epam.meme.config.logic.DataConfiguration;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.dbcp.BasicDataSource;
import org.eclipse.persistence.platform.database.DatabasePlatform;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.jndi.JndiTemplate;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.EclipseLinkJpaVendorAdapter;

import javax.annotation.Resource;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.util.Objects;
import java.util.Properties;

@Configuration
@Profile("neo")
public class HanaConfigurationImpl implements DataConfiguration {

    private static final String PROP_DATABASE_PLATFORM =
            "org.eclipse.persistence.platform.database.HANAPlatform";
    private static final String DATASOURCE = "java:comp/env/jdbc/dshana";

    @Bean
    public DataSource dataSource() {
        JndiDataSourceLookup dsLookup = new JndiDataSourceLookup();
        DataSource dataSource = dsLookup.getDataSource(DATASOURCE);
        return dataSource;
    }

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        EclipseLinkJpaVendorAdapter vendorAdapter = new EclipseLinkJpaVendorAdapter();
        vendorAdapter.setDatabasePlatform(PROP_DATABASE_PLATFORM);
        return vendorAdapter;
    }
}
