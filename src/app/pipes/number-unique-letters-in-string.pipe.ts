import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberUniqueLettersInString'
})
export class NumberUniqueLettersInStringPipe implements PipeTransform {
  transform(value: string[], args?: any): any {
    const result = [];
    const str = value.join('');
    const letters = new Object();

    for (let x = 0, length = str.length; x < length; x++) {
      const l = str.charAt(x);
      letters[l] = isNaN(letters[l]) ? 1 : letters[l] + 1;
    }
    result.push(letters);

    return result;
  }
}
