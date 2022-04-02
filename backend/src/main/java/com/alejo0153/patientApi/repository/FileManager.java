package com.alejo0153.patientApi.repository;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.alejo0153.patientApi.model.Patient;
import com.fasterxml.jackson.databind.ObjectMapper;

public class FileManager {

	private ObjectMapper objectMapper;
	
	private static final String FILE_PATH  = "." +  File.separator  + "data" ;
	
	public FileManager() {
		objectMapper = new ObjectMapper();
	}

	public void save(String id, Patient patient) {
		
		try {
			File file = new File(FILE_PATH +  File.separator + id);
			file.getParentFile().mkdirs();			
			objectMapper.writeValue(file, patient);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	public void remove(String id) {
		File file = new File(FILE_PATH +  File.separator + id);
		file.delete();
	}
	
	
	public List<Patient> getAll() {
		List<Patient> list = new ArrayList<>();
		
		File folder = new File(FILE_PATH);
		
		if(!folder.exists()) {
			return list;
		}
		
		
		for(File file: folder.listFiles()) {

			try {
				Patient patient = null;				
				patient = objectMapper.readValue(file, Patient.class);
				list.add(patient);				
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return list;
	}
	
	
}
