package com.faith.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faith.app.model.RoleDetails;
import com.faith.app.repository.IRoleDetailsRepo;

@Service
public class RoleDetailsService implements IRoleDetailsService {

	@Autowired
	IRoleDetailsRepo roleRepo;

	@Override
	public List<RoleDetails> listRole() {

		return roleRepo.findAll();
	}

}
