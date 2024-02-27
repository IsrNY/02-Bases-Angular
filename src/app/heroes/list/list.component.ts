import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['Spiterman','ChairoMan','Julk','Thortilla','negroPanter'];
  public deletedHero?:string;

  deleteLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }

  restoreHeroes():void {
    this.heroNames = ['Spiterman','ChairoMan','Julk','Thortilla','negroPanter'];
  }
}
