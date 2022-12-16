import { Component } from '@angular/core';

@Component({
  selector: 'app-m1s11.part2.app.component',
  templateUrl: './m1s11.part2.app.component.component.html',
  styleUrls: ['./m1s11.part2.app.component.component.scss']
})
export class M1s11Part2AppComponentComponent {
  page:string = "";

  teste() {
    this.page = 'precos';
    console.log(this.page);
  }
}
