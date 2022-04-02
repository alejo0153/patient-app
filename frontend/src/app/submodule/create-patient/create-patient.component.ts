import { Component, OnInit } from '@angular/core';
import { PatientDTO } from '../../model/patient';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageError } from 'src/app/model/messageError';
import { PatientService } from 'src/app/service/patient-service.service';
import { v4 as uuidv4 } from 'uuid';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  form!: FormGroup;
  error!: MessageError;
  private patient!: PatientDTO;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private dialogRef: MatDialogRef<CreatePatientComponent>
  ) { }



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      identification: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }


  onSubmit(): void {

    this.patient = new PatientDTO();

    this.patient.id = uuidv4();
    this.patient.identification = this.form.value.identification;
    this.patient.firstName = this.form.value.firstName;
    this.patient.lastName = this.form.value.lastName;
    this.patient.email = this.form.value.email;

    this.patientService.save(this.patient).subscribe(() =>{
      this.dialogRef.close();
    },(err)=>{
      this.error = err.error;
    });
  }

}
