import {Component, Output, ViewChildren, EventEmitter} from '@angular/core';

@Component({
  selector: 'ntfy2-filtro',
  templateUrl: './ntfy2-filtro.component.html',
  styleUrls: ['./ntfy2-filtro.component.scss']
})
export class Ntfy2FiltroComponent {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @ViewChildren('li') filterButtons:any;

  filterOptions = [
    {class: 'list-group-item btn-outline-secondary active', type: 'todos', textContent: 'Todos' },
    {class: 'list-group-item btn-outline-secondary', type: 'nao-lidos', textContent: 'Não lidos' },
    {class: 'list-group-item btn-outline-secondary', type: 'lidos', textContent: 'Lidos' }
  ];

  emitFilter(event:any, type: string) {
    this.updateActiveFilterButton(event);
    this.filter.emit(type);
  }

  updateActiveFilterButton(event:any) {
    this.filterButtons._results.forEach(filterButton => {
      filterButton.nativeElement.classList.remove('active');

      if(filterButton.nativeElement.textContent === event.target.textContent) {
        filterButton.nativeElement.classList.add('active');
      }
    });
  }
}
