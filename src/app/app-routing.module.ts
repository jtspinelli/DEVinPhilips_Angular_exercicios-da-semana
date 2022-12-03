import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1AppComponent } from "./M1S09/part1/part1.app.component";
import { Part2AppComponent } from "./M1S09/part2/part2.app.component";
import { Part3AppComponent } from "./M1S09/part3/part3.app.component";
import { Part4AppComponent } from "./M1S09/part4/part4.app.component";

const routes: Routes = [
  {path: 'm1s09/part1', component: Part1AppComponent},
  {path: 'm1s09/part2', component: Part2AppComponent},
  {path: 'm1s09/part3', component: Part3AppComponent},
  {path: 'm1s09/part4', component: Part4AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
