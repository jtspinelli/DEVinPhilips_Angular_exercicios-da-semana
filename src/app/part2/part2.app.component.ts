import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'part2-root',
  templateUrl: './part2.app.component.html',
  styleUrls: ['./part2.app.component.scss']
})
export class Part2AppComponent implements OnInit {
  character:any = {
    nome: 'Kleo Straub',
    imagem: 'assets/Kleo.jpg',
    descricao: 'Uma ex-espiã da Alemanha Oriental, Kleo possui sede de vingança contra todos aqueles que a traíram.',
    ator: {
      prefixo: 'atriz',
      nome: 'Jella Haase',
      link: 'https://en.wikipedia.org/wiki/Jella_Haase'
    },
    skills: [
      {nome: 'vingança', stars: 5},
      {nome: 'destreza', stars: 5},
      {nome: 'social', stars: 1}
    ]
  }

  ngOnInit() {
    document.body.classList.add("part2-body");
  }
}
