import { PatientDTO } from '../model/patient';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = 'http://localhost:8080//api';

  constructor(
    private http: HttpClient
    ){}

    save(patient: PatientDTO): Observable<Object>{
        return this.http.post(this.url + "/patient", patient);
    }

    findAll(): Observable<PatientDTO[]> {
        return this.http.get<PatientDTO[]>(this.url +"/patient");
    }

    getPatient(id:any): Observable<Object> {
      return this.http.get<PatientDTO>(this.url +"/patient/" + id);
    }

    deletePatient(id:any): Observable<Object> {
      return this.http.delete<PatientDTO>(this.url +"/patient/" + id);
    }


}
