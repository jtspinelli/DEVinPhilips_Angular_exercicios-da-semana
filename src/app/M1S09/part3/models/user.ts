export class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public setEmail(value:string) {
    this.email = value;
  }

  public setPassword(value:string) {
    this.password = value;
  }
}
