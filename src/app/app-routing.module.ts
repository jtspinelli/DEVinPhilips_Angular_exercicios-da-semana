import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1AppComponent } from "./M1S09/part1/part1.app.component";
import { Part2AppComponent } from "./M1S09/part2/part2.app.component";
import { Part3AppComponent } from "./M1S09/part3/part3.app.component";
import { Part4AppComponent } from "./M1S09/part4/part4.app.component";
import { NotifyAppComponent } from "./M1S08/notify.app.component";
import { Ntfy2AppComponent } from "./M1S10/ntfy2.app.component";
import {Ntfy2HomeComponent} from "./M1S10/pages/home/ntfy2-home.component";

const routes: Routes = [
  {path: 'm1s09/part1', component: Part1AppComponent},
  {path: 'm1s09/part2', component: Part2AppComponent},
  {path: 'm1s09/part3', component: Part3AppComponent},
  {path: 'm1s09/part4', component: Part4AppComponent},
  {path: 'm1s08', component: NotifyAppComponent},
  {path: 'm1s10', component: Ntfy2AppComponent, children: [
      {path: '', component: Ntfy2HomeComponent},
      {path: 'home/:filtro', component: Ntfy2HomeComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
