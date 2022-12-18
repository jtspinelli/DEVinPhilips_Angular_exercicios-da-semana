import {Component} from '@angular/core';

@Component({
  selector: 'm1s11-part6',
  templateUrl: './m1s11.part6.component.html',
  styleUrls: ['./m1s11.part6.component.scss']
})
export class M1s11Part6Component {
  emailIsValid:boolean | undefined;

  checkEmail(value: string): void {
    this.emailIsValid = value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) !== null;
  }
}
