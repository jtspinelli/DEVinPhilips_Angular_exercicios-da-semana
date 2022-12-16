import { Component } from '@angular/core';

@Component({
  selector: 'app-m1s11.part1.app.component',
  templateUrl: './m1s11.part1.app.component.component.html',
  styleUrls: ['./m1s11.part1.app.component.component.scss']
})
export class M1s11Part1AppComponentComponent {

  constructor() {
    document.body.classList.add("m1s11-part1-body");
  }

  phrase:string = "amanhã vai ser outro dia";
  author:string = "chico buarque";
}
