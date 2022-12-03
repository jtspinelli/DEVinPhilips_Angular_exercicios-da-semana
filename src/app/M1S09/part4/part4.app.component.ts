import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'part4-root',
  templateUrl: './part4.app.component.html',
  styleUrls: ['./part4.app.component.scss']
})
export class Part4AppComponent implements OnInit{
  ngOnInit() {
    document.body.classList.add("m1s09-part4-body");
  }
}
