import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing';
  randomText = lorem.sentence();
  message = '';

  OnInput = (value: Event) => {
    const target = value.target as HTMLInputElement;
    this.message = target.value;
  };

  compare(letter: string, index: string) {
    if (!index) {
      return 'none';
    }
    return letter === index ? 'correct' : 'incorrect';
  }
}
