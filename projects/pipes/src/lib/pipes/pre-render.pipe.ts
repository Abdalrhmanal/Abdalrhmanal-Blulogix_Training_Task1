import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preRender',
  standalone: true
})
export class PreRenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === false) {
      return 'No';
    } else if (value === true) {
      return 'Yes';
    } else if (typeof value === 'number') {
      return '$' + value.toFixed(2);
    } else {
      return value;
    }
  }

}
