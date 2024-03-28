import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
  transform(data: any[], key: string, value: any): any[] {
    if (!data || !key || !value) return data;

    return data.filter(item => item[key] === value);
  }
}
