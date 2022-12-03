import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroMateriasComponent } from './M1S09/part1/form-cadastro-materias/form-cadastro-materias.component';
import { NavbarComponent } from './M1S09/part1/navbar/navbar.component';
import { Part1AppComponent } from "./M1S09/part1/part1.app.component";
import { Part2AppComponent } from "./M1S09/part2/part2.app.component";
import { Part3AppComponent } from "./M1S09/part3/part3.app.component";
import { Part4AppComponent } from "./M1S09/part4/part4.app.component";
import { NotifyAppComponent } from "./M1S08/notify.app.component";
import { FavoriteSeriesCardComponent } from './M1S09/part2/favorite-series-card/favorite-series-card.component';
import { FormRegistroComponent } from './M1S09/part3/form-registro/form-registro.component';
import { BuscaComponent } from './M1S09/part4/busca/busca.component';
import { HeaderComponent } from './M1S08/components/header/header.component';
import { FooterComponent } from './M1S08/components/footer/footer.component';
import { NotificationListComponent } from './M1S08/components/notification-list/notification-list.component';
import { RandomNotificationComponent } from './M1S08/components/random-notification/random-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroMateriasComponent,
    NavbarComponent,
    Part1AppComponent,
    Part2AppComponent,
    Part3AppComponent,
    Part4AppComponent,
    NotifyAppComponent,
    FavoriteSeriesCardComponent,
    FormRegistroComponent,
    BuscaComponent,
    HeaderComponent,
    FooterComponent,
    NotificationListComponent,
    RandomNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
