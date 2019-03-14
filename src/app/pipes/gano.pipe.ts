import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gano'
})
export class GanoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == "0"){
      return "Perdió";
    }
    if(value == "1"){
      return "Ganó";
    }
  }

}
