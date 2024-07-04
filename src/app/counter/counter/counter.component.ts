import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
    <h3>Counter: {{counter}}</h3>
    
    <button type="button" id="btn" class="btn btn-success" (click)="inDesBy(1)">Sumar</button>
    <button type="button" class="btn btn-secondary px-3" (click)="reset()">Reset</button>
    <button type="button" id="btn" class="btn btn-danger" (click)="inDesBy(-1)">Restar</button>
  `,
  styles: [`
    p {
      color:red;
      font-size:30px;
    }
    `]
})
export class CounterComponent {
  public counter:number = 10;

  inDesBy(value: number):void {
    switch(value) {
      case 1:
        if(this.counter < 20) {
          this.counter++;
        } else {
          alert(`No se puede sumar más de: ${this.counter}`)
          this.counter = 10
        }
      break;
      case -1:
        if(this.counter > 0) {
          this.counter--;
        } else {
          alert(`No se puede restar menos de: ${this.counter}`)
          this.counter = 10
        }
      break;
    }
  }
  reset():void {
    this.counter = 10
  }
}
