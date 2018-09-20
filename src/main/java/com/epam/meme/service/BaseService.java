package com.epam.meme.service;

import java.util.Optional;

public interface BaseService<T> {

    /**
     * Adds new entity to the storage.
     *
     * @param entity to add
     */
    T create(T entity);

    /**
     * Finds entity entity in storage by id specified.
     *
     * @param entityId to find by
     * @return entity wrapped in optional if found, e,pty optional otherwise
     */
    Optional<T> findById(Long entityId);

    /**
     * Finds entity in data storage and updates its attributes with the attributes of the entity
     * passed  as parameter.
     *
     * @param entity to fetch new attribute values
     */
    void update(T entity);

    /**
     * Deletes entity from the storage if it is present.
     *
     * @param entity to delete
     */
    void delete(T entity);

    /**
     * Deletes entity from the storage if it is present
     *
     * @param entityId id of entity to delete
     * @throws IllegalArgumentException in case the given id is null
     */
    void deleteById(Long entityId);
}
