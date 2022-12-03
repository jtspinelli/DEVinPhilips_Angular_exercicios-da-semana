import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Part1AppComponent} from "./M1S09/part1/part1.app.component";
import {Part2AppComponent} from "./M1S09/part2/part2.app.component";

const routes: Routes = [
  {path: 'm1s09/part1', component: Part1AppComponent},
  {path: 'm1s09/part2', component: Part2AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
