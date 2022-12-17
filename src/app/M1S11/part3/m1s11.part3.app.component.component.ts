import { Component } from '@angular/core';

class Picture {
  url:string;
  description:string;

  constructor(url:string, description: string) {
    this.url = url;
    this.description = description;
  }
}

@Component({
  selector: 'app-m1s11.part3.app.component',
  templateUrl: './m1s11.part3.app.component.component.html',
  styleUrls: ['./m1s11.part3.app.component.component.scss']
})
export class M1s11Part3AppComponentComponent {
  arrayFotos: Picture[] = [
    new Picture(
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "Partituras"
    ),
    new Picture(
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "Toca discos"
    ),
    new Picture(
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      "Microfone"
    ),
    new Picture(
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "Violonista"
    ),
    new Picture(
      "https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "Casal tocando violão"
    )
  ]
}
