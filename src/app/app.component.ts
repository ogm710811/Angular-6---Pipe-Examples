import { Component } from '@angular/core';
import { FirstElementStringPlusDotsPipe } from './pipes/first-element-string-plus-dots.pipe';
import { NumberUniqueLettersInStringPipe } from './pipes/number-unique-letters-in-string.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-examples';
  exampleOne = 'Angular6';
  exampleTwo = ['red', 'green'];
  exampleThree = [
    {
      name: 'cat',
      size: 'small',
      weight: 5
    },
    {
      name: 'dog',
      size: 'small',
      weight: 10
    },
    {
      name: 'lion',
      size: 'medium',
      weight: 150
    },
    {
      name: 'elephant',
      size: 'big',
      weight: 5000
    }
  ];
}
