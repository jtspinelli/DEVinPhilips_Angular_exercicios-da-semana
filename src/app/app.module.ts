import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroMateriasComponent } from './part1/form-cadastro-materias/form-cadastro-materias.component';
import { NavbarComponent } from './part1/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroMateriasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
