import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroMateriasComponent } from './M1S09/part1/form-cadastro-materias/form-cadastro-materias.component';
import { NavbarComponent } from './M1S09/part1/navbar/navbar.component';
import {Part1AppComponent} from "./M1S09/part1/part1.app.component";
import {Part2AppComponent} from "./M1S09/part2/part2.app.component";
import { FavoriteSeriesCardComponent } from './M1S09/part2/favorite-series-card/favorite-series-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroMateriasComponent,
    NavbarComponent,
    Part1AppComponent,
    Part2AppComponent,
    FavoriteSeriesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
