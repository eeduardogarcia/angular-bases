import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter: {{ counter }}</h1>

  <button (click)="increaseBy(1)">+ 1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">- 1</button> 
`
})
export class CounterComponent {
  counter = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void{
    this.counter = 0;
  }
}
