package com.alejo0153.patientApi.repository;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

import com.alejo0153.patientApi.model.Patient;
import com.jgfanng.algo.BPlusTree;

@Repository
public class PatientRepositoryImpl implements PatientRepository {

	private BPlusTree<String, Patient> bPlusTree;
	
	private FileManager fileManager;

	public PatientRepositoryImpl() {
		bPlusTree = new BPlusTree();
		fileManager = new FileManager();
	}

	@PostConstruct
	public void init() {
		List<Patient> patients = fileManager.getAll();
		for(Patient patient: patients) {
			bPlusTree.insert(patient.getId(), patient);
		}
		
	}
	
	
	@Override
	public void save(Patient patient) {
		bPlusTree.insert(patient.getId(), patient);
		fileManager.save(patient.getId(), patient);
	
	}


	@Override
	public List<Patient> findAll() {
		return bPlusTree.findAll();
		
	}

	@Override
	public Patient findById(String id) {
		return bPlusTree.search(id);
	}

	@Override
	public void deleteById(String id) {
		bPlusTree.delete(id);
		fileManager.remove(id);
	}

}
