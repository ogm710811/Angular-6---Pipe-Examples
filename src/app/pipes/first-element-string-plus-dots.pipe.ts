import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstElementStringPlusDots'
})
export class FirstElementStringPlusDotsPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    const subStr = value.slice(0, 5);
    return subStr + '...';
  }
}
