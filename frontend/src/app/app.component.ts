import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePatientComponent } from './submodule/create-patient/create-patient.component';
import { FindPatientComponent } from './submodule/find-patient/find-patient.component';

import { PatientService } from './service/patient-service.service';
import { PatientDTO } from './model/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patientApp';

  patientData!: PatientDTO;
  patients: PatientDTO[] = [];
  displayedColumns: string[] = ['id', 'identification', 'firstName', 'lastName', 'email', 'delete', 'searchFor' ];

  constructor(
              public dialog: MatDialog,
              private patientService: PatientService
              ){}

    ngOnInit(): void {
      this.loadPatients();
    }

    loadPatients():void {
      this.patientService.findAll().subscribe((res) => {
        this.patients = res;
      })
    }


    deletePatient(id:string): void{
      this.patientService.deletePatient(id).subscribe(() => {
        this.loadPatients();
      })
    }

    getPatientById(id:string): void{
      this.patientData = new PatientDTO();
      this.patientData.id= id;
      const dialogRef = this.dialog.open(FindPatientComponent, {data: this.patientData});

      dialogRef.afterClosed().subscribe(result => {
        this.loadPatients();
      });

    }


  createPatient() {
    const dialogRef = this.dialog.open(CreatePatientComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadPatients();
    });
  }

}

