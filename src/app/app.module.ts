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
import { Ntfy2AppComponent } from "./M1S10/ntfy2.app.component";
import { FavoriteSeriesCardComponent } from './M1S09/part2/favorite-series-card/favorite-series-card.component';
import { FormRegistroComponent } from './M1S09/part3/form-registro/form-registro.component';
import { BuscaComponent } from './M1S09/part4/busca/busca.component';
import { HeaderComponent } from './M1S08/components/header/header.component';
import { Ntfy2HeaderComponent } from "./M1S10/components/header/ntfy2-header.component";
import { FooterComponent } from './M1S08/components/footer/footer.component';
import { Ntfy2FooterComponent } from "./M1S10/components/footer/ntfy2-footer.component";
import { NotificationListComponent } from './M1S08/components/notification-list/notification-list.component';
import { Ntfy2NotificationListComponent } from "./M1S10/components/notification-list/ntfy2-notification-list.component";
import { RandomNotificationComponent } from './M1S08/components/random-notification/random-notification.component';
import { Ntfy2RandomNotificationComponent } from "./M1S10/components/random-notification/ntfy2-random-notification.component";
import { Ntfy2FiltroComponent } from './M1S10/components/ntfy2-filtro/ntfy2-filtro.component';
import { Ntfy2HomeComponent } from './M1S10/pages/home/ntfy2-home.component';
import { Ntfy2AboutComponent } from './M1S10/pages/ntfy2-about/ntfy2-about.component';
import { M1s11AppComponent } from "./M1S11/m1s11.app.component";
import { CapitalizePhillipsPipe } from './M1S11/part1/pipes/capitalize-phillips.pipe';
import { M1s11Part1AppComponentComponent } from './M1S11/part1/m1s11.part1.app.component.component';
import { M1s11Part2AppComponentComponent } from './M1S11/part2/m1s11.part2.app.component.component';
import { M1s11Part3AppComponentComponent } from './M1S11/part3/m1s11.part3.app.component.component';
import { M1s11Part4AppComponentComponent } from './M1S11/part4/m1s11.part4.app.component.component';
import { M1s11Part4ModalComponent } from './M1S11/part4/m1s11.part4.modal/m1s11.part4.modal.component';
import { M1s11Part5Component } from './M1S11/part5/m1s11.part5.component';
import { M1s11Part5CardComponent } from './M1S11/part5/m1s11.part5.card/m1s11.part5.card.component';
import { M1s11Part6Component } from './M1S11/part6/m1s11.part6.component';

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
    Ntfy2AppComponent,
    FavoriteSeriesCardComponent,
    FormRegistroComponent,
    BuscaComponent,
    HeaderComponent,
    Ntfy2HeaderComponent,
    FooterComponent,
    Ntfy2FooterComponent,
    NotificationListComponent,
    Ntfy2NotificationListComponent,
    RandomNotificationComponent,
    Ntfy2RandomNotificationComponent,
    Ntfy2FiltroComponent,
    Ntfy2HomeComponent,
    Ntfy2AboutComponent,
    M1s11AppComponent,
    CapitalizePhillipsPipe,
    M1s11Part1AppComponentComponent,
    M1s11Part2AppComponentComponent,
    M1s11Part3AppComponentComponent,
    M1s11Part4AppComponentComponent,
    M1s11Part4ModalComponent,
    M1s11Part5Component,
    M1s11Part5CardComponent,
    M1s11Part6Component
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
