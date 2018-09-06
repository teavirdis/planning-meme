package com.epam.meme.config.logic;

import com.epam.meme.config.logic.impl.HanaConfigurationImpl;
import com.epam.meme.config.logic.impl.PostgresConfigurationImpl;
import com.epam.meme.config.logic.impl.TestConfigurationImpl;
import org.eclipse.persistence.jpa.PersistenceProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.Resource;
import java.util.Properties;

@Configuration
@ComponentScan({"com.epam.meme.service", "com.epam.meme.repository"})
@PropertySource("classpath:database.properties")
@EnableTransactionManagement
@EnableJpaRepositories
@Import({HanaConfigurationImpl.class, TestConfigurationImpl.class, PostgresConfigurationImpl.class})
public class ApplicationConfiguration {
    private static final String PROP_ECLIPSE_PACKAGES_TO_SCAN = "db.entitymanager.packages.to.scan";
    private static final String ECLIPSE_HBM2DDL_AUTO = "generateDdl";
    private static final String PROP_ECLIPSE_HBM2DDL_AUTO = "db.eclipse.hbm2ddl.auto";
    private static final String ECLIPSE_SHOW_SQL = "showSql";
    private static final String ECLIPSE_WEAVING = "eclipselink.weaving";
    private static final String PROP_ECLIPSE_WEAVING = "db.eclipse.weaving";
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

        //TODO read about eclipselink.weaving
        eclipseProperties.setProperty(ECLIPSE_WEAVING, env.getProperty(PROP_ECLIPSE_WEAVING));
        eclipseProperties.setProperty(ECLIPSE_HBM2DDL_AUTO, env.getRequiredProperty(PROP_ECLIPSE_HBM2DDL_AUTO));
        eclipseProperties.setProperty(ECLIPSE_SHOW_SQL, env.getRequiredProperty(PROP_ECLIPSE_SHOW_SQL));
        return eclipseProperties;
    }
}
