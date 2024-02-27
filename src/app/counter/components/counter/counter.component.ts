import { Component } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector:'app-counter',
  template: `<h3>Counter: {{counter}}</h3>
              <button class="btn btn-outline-success m-2" (click)="operar(1)">Suma</button>
              <button class="btn btn-outline-warning" (click)="reset()">Reset</button>
              <button class="btn btn-outline-danger m-2" (click)="operar(-1)">Resta</button>`
})
export class CounterComponent{
  public counter:number = 10;

  operar(valor:number):void {
    if(this.counter >= 20){
      Swal.fire({
        title:'Atención!',
        text:`Contador llego al límite de 20, resetear`,
        icon:'warning',
        timer:1500,
        showConfirmButton:false
      });
    }
    else if(this.counter == 0) {
      Swal.fire({
        title:'Atención!',
        text:'Contador llego al límite de 0, resetear',
        icon:'warning',
        timer:1500,
        showConfirmButton:false
      });
    } else {
        this.counter += valor;
    }

    }
  reset():void{
    this.counter = 10;
  }
}
