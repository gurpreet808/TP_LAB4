import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gano'
})
export class GanoPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value === 0) return 'Perdió';
    return 'Ganó';
  }

}
