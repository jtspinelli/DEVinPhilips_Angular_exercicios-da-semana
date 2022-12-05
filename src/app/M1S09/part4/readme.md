# Testando EventEmitter

Esta aplicação [**Angular**](https://angular.io/) apresenta ao usuário apenas um campo de input centralizado na tela:

<div align='center'>
<img width='500px' src='./images/App screenshot.png'>
</div>

## Output Decorator

A Componente [**Busca**](https://github.com/jtspinelli/DEVinPhilips_Angular_exercicios-da-semana/blob/master/src/app/M1S09/part4/busca/busca.component.ts) contém uma propriedade **inputKeyup** marcada com o [Output Angular Decorator](https://docs.angular.lat/api/core/Output) - @Output( ).

**inputKeyup** é uma instância de [EventEmitter](https://angular.io/api/core/EventEmitter), classe Angular que permite emitir **eventos personalizados**.

Ao utilizar o teclado dentro do campo de input, **inputKeyup** é disparado.

<br>

## Event binding

A [**Componente Pai**](https://github.com/jtspinelli/DEVinPhilips_Angular_exercicios-da-semana/blob/master/src/app/M1S09/part4/part4.app.component.ts) da Componente Busca "amarra" um de seus métodos à emissão deste evento:

```HTML
<busca (inputKeyup)="printData($event)"></busca>
```

### Resultado:
Dessa forma, a Componente Pai recebe o valor do campo input na Componente Busca e imprime tal valor no console.
