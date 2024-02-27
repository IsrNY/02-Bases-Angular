import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ChairoMan';
  public age:number = 50;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getheroDescription():string {

    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = "Spiterman";
  }

  changeAge():void {
    this.age = 30;
  }

  resetValues():void {
    this.name = 'ChairoMan';
    this.age = 50;
  }
}
