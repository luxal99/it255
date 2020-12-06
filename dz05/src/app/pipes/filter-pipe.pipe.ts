import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '../models/Room';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: Room[], text: string): any {
    if (!items) return [];
    if (!text) return items;

    return items.filter(room =>
      room.title.toLowerCase().includes(text.toLowerCase())
    )
  }

}
