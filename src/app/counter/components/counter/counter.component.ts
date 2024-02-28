import { Component } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector:'app-counter',
  template:  `<h3>Counter: {{counter}}</h3>
              <button class="btn btn-outline-success m-2" (click)="operar(1)">Suma</button>
              <button class="btn btn-outline-danger m-2" (click)="operar(-1)">Resta</button>`
})
export class CounterComponent{
  public counter:number = 10;

  alerta(limit:number):void{
    const SwalCustom = Swal.mixin({
      customClass:{
        confirmButton:"btn btn-success mx-2",
        cancelButton:"btn btn-danger mx-2"
      },
      buttonsStyling:false,
    })
    SwalCustom.fire({
      title:'Alerta!',
      text:`Contador llego al límite de: ${limit}`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Reset',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        SwalCustom.fire({
          title:'Reiniciando',
          text:'Reiniciando contador',
          icon:'success',
          showConfirmButton:false,
          timer:1000
        })
        this.counter = 10;
      } else if(result.dismiss === Swal.DismissReason.cancel) {
        SwalCustom.fire({
          title:'Cancelado',
          text:'Reinicio cancelado',
          icon:'error',
          showConfirmButton:false,
          timer:1000
        })
      }
    });
  }

  operar(valor:number):void {
      if(this.counter == 20){
        this.alerta(20)
      } else if(this.counter == 0) {
        this.alerta(0)
      } else {
    this.counter += valor;
    }
  }
}
