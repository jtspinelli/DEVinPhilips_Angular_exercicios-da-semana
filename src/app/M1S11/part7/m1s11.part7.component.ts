import {Component, ViewChild, ElementRef} from '@angular/core';
import {ToastrService} from "ngx-toastr";

class Todo {
  task: string;

  constructor(task: string) {
    this.task = task;
  }
}

@Component({
  selector: 'm1s11-part7',
  templateUrl: './m1s11.part7.component.html',
  styleUrls: ['./m1s11.part7.component.scss']
})
export class M1s11Part7Component {
  @ViewChild('form')
  form: ElementRef<HTMLFormElement>;

  @ViewChild('input')
  input: ElementRef<HTMLInputElement>;

  @ViewChild('toast')
  toast: ElementRef<HTMLDivElement>;

  constructor(private toastr:ToastrService) {
  }

  todos: Todo[] = [];

  inputIsValid: boolean = false;

  check() {
    this.inputIsValid = this.input.nativeElement.value.length > 0;
  }

  addTodo() {
    this.todos.push( new Todo(this.input.nativeElement.value) );

    this.form.nativeElement.reset();
    this.inputIsValid = false;

    this.toastr.success('Novo todo adicionado com sucesso!');
  }

  confirm(todo: Todo) {
    const notAuthorized = !confirm(`Excluir o todo '${todo.task}'?`);

    if(notAuthorized) return;

    this.todos.splice(this.todos.findIndex(t => t.task === todo.task), 1);

    this.toastr.warning('Todo excluído com sucesso!');
  }

  ngOnInit() {
    this.todos.push({task: "Passar no mercado"});
    this.todos.push({task: "Combinar o Natal com a família"});
  }
}
