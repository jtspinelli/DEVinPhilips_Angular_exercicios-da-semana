# Registro de Usuários

Esta aplicação [**Angular**](https://angular.io/) apresenta simples formulário [Bootstrap](https://getbootstrap.com/) para registro de usuários.

<div align='center'>
<img width='500px' src='./images/App screenshot.png'>
</div>

<br>

## Diretiva NgForm e NgModel

A Componente [**FormRegistro**](https://github.com/jtspinelli/DEVinPhilips_Angular_exercicios-da-semana/blob/master/src/app/M1S09/part3/form-registro/form-registro.component.ts) observa valores dos inputs de Email e Password através das diretivas [NgForm](https://angular.io/api/forms/NgForm) e [NgModel](https://angular.io/api/forms/NgModel).

<br>

## Validações

- Emails são considerados válidos se não vazios e se respeitarem à [Expressão Regular](https://github.com/jtspinelli/DEVinPhilips_Angular_exercicios-da-semana/blob/master/src/app/M1S09/part3/form-registro/form-registro.component.ts#L32) :

```JS
/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
``` 
- Senhas são consideradas válidas se não vazias



<br>

## Persistência de Dados

Os dados dos usuários registrados são guardados no [**LocalStorage**](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) para que possam ser recuperados posteriormente.

<br>

## Classes e Serviços

Cada usuário é uma instância da [**Classe User**](https://github.com/jtspinelli/DEVinPhilips_Angular_exercicios-da-semana/blob/master/src/app/M1S09/part3/models/user.ts).

A classe de serviço [**RegistroUsuario**](https://github.com/jtspinelli/DEVinPhilips_Angular_exercicios-da-semana/blob/master/src/app/M1S09/part3/services/registro-usuario.service.ts) fornece a lógica para criar usuário (caso já não exista) e para atualizar o "pool" de usuários no LocalStorage.
