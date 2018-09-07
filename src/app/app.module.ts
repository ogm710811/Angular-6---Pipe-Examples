import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstElementStringPlusDotsPipe } from './pipes/first-element-string-plus-dots.pipe';
import { NumberUniqueLettersInStringPipe } from './pipes/number-unique-letters-in-string.pipe';
import { FilterArrayElementsPipe } from './pipes/filter-array-elements.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstElementStringPlusDotsPipe,
    NumberUniqueLettersInStringPipe,
    FilterArrayElementsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
