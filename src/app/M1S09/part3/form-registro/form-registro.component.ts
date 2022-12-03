import { Component, ViewChild } from '@angular/core';
import { RegistroUsuarioService } from "../services/registro-usuario.service";
import { User } from "../models/user";

@Component({
  selector: 'form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent {
  constructor(private registroService: RegistroUsuarioService) {
    registroService.$userCreated.subscribe(() => {
      this.resetForm();
    });
  }

  newUser = new User("", "");

  @ViewChild('form') form:HTMLFormElement;

  submitForm(event: any) {
    event.preventDefault();

    if(this.invalidEmail || this.invalidPassword) return;

    this.registroService.createUser(this.newUser);
  }

  setEmail(event: any) {
    this.newUser.setEmail(event.target.value);
  }

  setPassword(event: any) {
    this.newUser.setPassword(event.target.value);
  }

  get validEmail() {
    const emailIsValid = this.newUser.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) !== null && this.newUser.email.length > 0;

    if(!emailIsValid) {
      alert("Email inválido.");
    }

    return emailIsValid;
  }

  get invalidEmail() {
    return !this.validEmail;
  }

  get validPassword() {
    const passwordIsValid = this.newUser.password.length > 0;

    if(!passwordIsValid) {
      alert("Senha não pode estar em branco.")
    }

    return passwordIsValid;
  }

  get invalidPassword() {
    return !this.validPassword;
  }

  resetForm() {
    this.form['nativeElement'].reset();
    this.newUser.email = "";
    this.newUser.password = "";
  }

}
