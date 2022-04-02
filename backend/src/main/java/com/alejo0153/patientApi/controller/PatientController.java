package com.alejo0153.patientApi.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.alejo0153.patientApi.model.Patient;
import com.alejo0153.patientApi.service.PatientService;

@RestController()
@RequestMapping("/api")
public class PatientController {

	@Autowired
	PatientService patientService;

	@PostMapping("/patient")
	public ResponseEntity<Void> save(@RequestBody @Valid Patient patient) {
		patientService.save(patient);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/patient")
	public ResponseEntity<List<Patient>> findAll() {
		return new ResponseEntity<>(patientService.findAll(), HttpStatus.OK);
	}

	@GetMapping("/patient/{id}")
	public ResponseEntity<Patient> findById(@PathVariable String id) {
		try {
			Patient patient = patientService.findById(id);
			return new ResponseEntity<>(patient, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@CrossOrigin
	@DeleteMapping("/patient/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String id) {
		patientService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
