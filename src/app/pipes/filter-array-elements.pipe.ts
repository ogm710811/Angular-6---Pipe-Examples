import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './../models/animal';

@Pipe({
  name: 'filterArrayElements'
})
export class FilterArrayElementsPipe implements PipeTransform {
  transform(value: Animal[], args?: any): any {
    return value.filter(a => a.size === 'small');
  }
}
