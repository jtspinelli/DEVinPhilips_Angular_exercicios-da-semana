import { Component } from '@angular/core';

@Component({
  selector: 'm1s11',
  templateUrl: './m1s11.app.component.html',
  styleUrls:['./m1s11.app.component.scss']
})
export class M1s11AppComponent {

  constructor() {
    document.body.classList.add("m1s11-part1-body");
  }

  phrase:string = "amanhã vai ser outro dia";
  author:string = "chico buarque";
}
