import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ntfy2-filtro',
  templateUrl: './ntfy2-filtro.component.html',
  styleUrls: ['./ntfy2-filtro.component.scss']
})
export class Ntfy2FiltroComponent {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  emitFilter(type: string) {
    this.filter.emit(type);
  }
}
