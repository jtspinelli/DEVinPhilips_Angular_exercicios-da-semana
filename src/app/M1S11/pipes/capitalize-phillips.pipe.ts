import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePhillips'
})
export class CapitalizePhillipsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
