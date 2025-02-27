import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): string | any {
    const IS_EMPY = value === undefined || value === null || value === '';

    if (IS_EMPY) {
      return '-';
    }

    return value;
  }

}
