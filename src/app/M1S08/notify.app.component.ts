import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm1s08',
  templateUrl: './notify.app.component.html',
  styleUrls:['./notify.app.component.scss']
})
export class NotifyAppComponent implements OnInit {
  ngOnInit() {
    document.body.classList.add('m1s08-body');
  }
}
