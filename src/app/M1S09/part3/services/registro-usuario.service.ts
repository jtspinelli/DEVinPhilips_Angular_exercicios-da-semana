import { Injectable } from '@angular/core';
import { User } from "../Models/user";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  constructor() { }

  $userCreated:Subject<any> = new Subject<any>();

  createUser(newUser: User): void {
    if(this.userExists(newUser)) {
      alert("Usuário já existe.")
    } else {
      const users = this.getUsersFromDb();
      users.push(newUser);
      this.updateUsersDb(users);

      alert("Usuário adicionado com sucesso!")

      this.$userCreated.next('');
    }
  }

  updateUsersDb(users:User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsersFromDb(): User[] {
    const dbUsers = localStorage.getItem('users');
    return dbUsers ? JSON.parse((dbUsers)) : [];
  }

  userExists(user: User): boolean {
    return this.getUsersFromDb().find((e:User) => e.email === user.email) !== undefined;
  }
}
