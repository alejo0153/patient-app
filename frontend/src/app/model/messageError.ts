export interface IMessageError {
  message?: string;
  exception?: string;
  timestamp?: string;
  errors: string[];
}

export class MessageError implements IMessageError {
  constructor(
    public message?: string | undefined,
    public exception?: string | undefined,
    public timestamp?: string | undefined,
    public errors: string[] = []
  ) {}
}
