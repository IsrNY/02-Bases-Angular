import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mensaje:string = 'What´s Up';

  public counter:number = 10;

  sumar():void {

    if(this.counter < 20){
      this.counter += 1;
    } else {
      alert('Contador excedido, decrementar')
    }
  }
  restar():void{
    if(this.counter > 0)
    {
    this.counter -= 1;
    }
  else {
    alert('Contador llegó a 0, incrementar')
  }
}
  reset():void{
    this.counter = 10;
  }
}
