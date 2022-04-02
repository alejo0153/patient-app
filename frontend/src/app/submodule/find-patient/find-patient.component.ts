import { Component, Inject, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient-service.service';
import { PatientDTO } from '../../model/patient';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.css']
})
export class FindPatientComponent implements OnInit {
  form!: FormGroup;
  private patient!: PatientDTO;

  constructor(  private patientService : PatientService,
                private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<FindPatientComponent>,
                @ Inject(MAT_DIALOG_DATA) public data: PatientDTO
              ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      identification: [''],
      firstName: [''],
      lastName: [''],
      email: [{disabled: true}]
    });

    this.searchForPatient();

  }

  searchForPatient():void {
    this.patientService.getPatient(this.data.id).subscribe((res) => {
      this.patient = res;
      this.disabledField();
      this.form.controls['id'].setValue(this.patient.id);
      this.form.controls['identification'].setValue(this.patient.identification);
      this.form.controls['firstName'].setValue(this.patient.firstName);
      this.form.controls['lastName'].setValue(this.patient.lastName);
      this.form.controls['email'].setValue(this.patient.email);
    })
  }

  disabledField():void {
    this.form.controls['id'].disable();
    this.form.controls['identification'].disable();
    this.form.controls['firstName'].disable();
    this.form.controls['lastName'].disable();
    this.form.controls['email'].disable();
  }

}
