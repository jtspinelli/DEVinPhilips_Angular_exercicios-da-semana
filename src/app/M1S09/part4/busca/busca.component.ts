import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent {
  @Output() inputKeyup: EventEmitter<any> = new EventEmitter<any>();

  inputValue:string = "";

  sendData() {
    this.inputKeyup.emit(this.inputValue);
  }
}
