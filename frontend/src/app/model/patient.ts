export interface IPatientDTO {
  id?: string;
  identification?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export class PatientDTO implements IPatientDTO {
  constructor(
    public id?: string,
    public identification?: string | undefined,
    public firstName?: string | undefined,
    public lastName?: string | undefined,
    public email?: string | undefined
  ) {}
}
