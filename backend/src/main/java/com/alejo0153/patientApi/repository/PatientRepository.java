package com.alejo0153.patientApi.repository;

import java.util.List;

import com.alejo0153.patientApi.model.Patient;

public interface PatientRepository {

	public void save(Patient patient);

	public List<Patient> findAll();

	public Patient findById(String id);

	public void deleteById(String id);

}
