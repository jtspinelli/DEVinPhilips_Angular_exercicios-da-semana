import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroMateriasComponent } from './part1/form-cadastro-materias/form-cadastro-materias.component';
import { NavbarComponent } from './part1/navbar/navbar.component';
import {Part1AppComponent} from "./part1/part1.app.component";
import {Part2AppComponent} from "./part2/part2.app.component";

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroMateriasComponent,
    NavbarComponent,
    Part1AppComponent,
    Part2AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
