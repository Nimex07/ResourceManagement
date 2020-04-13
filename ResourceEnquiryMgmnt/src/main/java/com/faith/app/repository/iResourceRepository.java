package com.faith.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.faith.app.model.Resource;

public interface iResourceRepository extends JpaRepositoryImplementation<Resource, Long> {

	Optional<Resource> findByResourceType(String resourceName);

}
