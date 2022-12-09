import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm1s10',
  templateUrl: './ntfy2.app.component.html',
  styleUrls:['./ntfy2.app.component.scss']
})
export class Ntfy2AppComponent implements OnInit {
  ngOnInit() {
    document.body.classList.add('m1s08-body');
  }
}
