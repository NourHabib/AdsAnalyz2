import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advFilter'
})
export class AdvFilterPipe implements PipeTransform {

  transform(items: any[], filter?: any): any {
    if (!items || !filter) {
      return items;
    }
    return  items.filter(item => item.name.indexOf(filter) > -1 );
  }

}
