package com.alejo0153.patientApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejo0153.patientApi.model.Patient;
import com.alejo0153.patientApi.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	public void save(Patient patient) {
		
		patientRepository.save(patient);
	}

	public List<Patient> findAll(){ 
		
		return patientRepository.findAll();
	}

	public Patient findById(String id) {
		
		return patientRepository.findById(id);
	}

	public void deleteById(String id) {
		patientRepository.deleteById(id);
	}	
	
}
