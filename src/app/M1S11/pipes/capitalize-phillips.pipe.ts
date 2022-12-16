import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePhillips'
})
export class CapitalizePhillipsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split(" ").map(e => this.capitalize(e)).join(" ");
  }

  capitalize(word: string) {
    return word[0].toUpperCase() + word.substring(1);
  }

}
