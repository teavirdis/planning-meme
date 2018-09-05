package com.epam.meme.config.logic;

import com.epam.meme.config.logic.impl.HanaConfigurationImpl;
import com.epam.meme.config.logic.impl.TestConfigurationImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.Resource;
import javax.persistence.spi.PersistenceProvider;
import java.util.Properties;

@Configuration
@ComponentScan({"com.epam.meme.service", "com.epam.meme.dao"})
@PropertySource("classpath:h2/h2.properties")
@EnableTransactionManagement
@Import({HanaConfigurationImpl.class, TestConfigurationImpl.class})
public class ApplicationConfiguration {
    private static final String PROP_ECLIPSE_PACKAGES_TO_SCAN = "db.entitymanager.packages.to.scan";
    private static final String ECLIPSE_HBM2DDL_AUTO = "generateDdl";
    private static final String PROP_ECLIPSE_HBM2DDL_AUTO = "db.eclipse.hbm2ddl.auto";
    private static final String ECLIPSE_SHOW_SQL = "showSql";
    private static final String PROP_ECLIPSE_SHOW_SQL = "db.eclipse.show_sql";

    @Resource
    private Environment env;

    private DataConfiguration dataConfiguration;

    @Autowired
    public void setDataConfiguration(DataConfiguration dataConfiguration) {
        this.dataConfiguration = dataConfiguration;
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactoryBean.setDataSource(dataConfiguration.dataSource());
        entityManagerFactoryBean.setPersistenceProviderClass(PersistenceProvider.class);
        entityManagerFactoryBean.setPackagesToScan(env.getRequiredProperty(PROP_ECLIPSE_PACKAGES_TO_SCAN));
        entityManagerFactoryBean.setJpaVendorAdapter(dataConfiguration.jpaVendorAdapter());
        entityManagerFactoryBean.setJpaProperties(getEclipseProperties());
        return entityManagerFactoryBean;
    }

    @Bean
    public JpaTransactionManager transactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return transactionManager;
    }

    private Properties getEclipseProperties() {
        Properties eclipseProperties = new Properties();

        //TODO eclipseProperties
        eclipseProperties.setProperty(ECLIPSE_HBM2DDL_AUTO, env.getRequiredProperty(PROP_ECLIPSE_HBM2DDL_AUTO));
        eclipseProperties.setProperty(ECLIPSE_SHOW_SQL, env.getRequiredProperty(PROP_ECLIPSE_SHOW_SQL));
        return eclipseProperties;
    }
}
