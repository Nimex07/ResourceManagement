package com.faith.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.faith.app.model.ResourceDetails;

public interface iResourceDetailsService {
	
	public ResourceDetails addResource(ResourceDetails resourceDetails);

	public ResourceDetails updateResource(ResourceDetails resourceDetails);

	public List<ResourceDetails> listAllResource();

	public ResourceDetails findResourceById(Long resourceId);

	public List<ResourceDetails> findResourcesByName(String resourceName);

	public void updateIsactive(Character isActive, Long resourceId);

	public void updateIsBooked(Character isBooked, Long resourceId);

	public void updateIsAccepted(Character isAccepted, Long resourceId);

	public List<ResourceDetails> listResourceDetails();

	public List<ResourceDetails> searchByResTypeId(Long id);

	public List<ResourceDetails> searchByResTypeActive(Long id);

}
