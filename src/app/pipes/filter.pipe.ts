import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], key: string, value: string): any[] {
    if (!data || !key || !value) {
      return data;
    }

    return data.filter(item => {
      if (item[key]) {
        return item[key].toLowerCase().includes(value.toLowerCase());
      }
      return false;
    });
  }
}
