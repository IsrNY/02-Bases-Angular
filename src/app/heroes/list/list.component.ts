import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['Spiterman','Julk','Thortilla','Niko Furias','El hombre de fierro'];
  public deletedHero?:string = '';

  deleteHero():void {
    this.deletedHero =  this.heroNames.pop();
  }

  resetArray():void {
    this.heroNames = ['Spiterman','Julk','Thortilla','Niko Furias','El hombre de fierro'];
    this.deletedHero = '';
  }
}
