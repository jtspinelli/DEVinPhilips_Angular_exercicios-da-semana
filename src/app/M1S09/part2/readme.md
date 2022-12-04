# Card de série favorita

Esta aplicação [**Angular**](https://angular.io/) apresenta um card com informações da protagonista de uma das minhas séries atuais preferidas: [**Kleo**](https://www.netflix.com/br/title/81216677).

![App screenshot](./images/App%20screenshot.png)

<br>

## It's LIVE

Aplicação pode ser acessada [**online**](https://dih-philips-ng-week-exercises.herokuapp.com/m1s09/part2).

<br>

## Estilos

A estilização foi feita com [Bootstrap](https://getbootstrap.com/) e [Font Awesome](https://fontawesome.com/), buscando trazer um pouco da ambientação da série que se passa na Alemanha, na época da queda do muro de Berlim.

A aplicação se ajusta à telas de smartphone:

<div align='center'>
<img width='400px' src='./images/Smartphone.png'>
</div>

<br>

## Angular @Input() decorator

A Componente [**FavoriteSeriesCard**](https://github.com/jtspinelli/DEVinPhilips_Angular_exercicios-da-semana/blob/master/src/app/M1S09/part2/favorite-series-card/favorite-series-card.component.ts) depende da propriedade **character** para exibir as informações do personagem no card.

Esta propriedade foi marcada com o [decorator @Input()](https://angular.io/api/core/Input), para que o componente pai pudesse passar essas informações à componente FavoriteSeriesCard.


```HTML
<favorite-series-card [character]="character"></favorite-series-card>
```
