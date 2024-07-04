import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Iron Man';
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeAge():void {
    this.age = 25;
  }

  changeName():void {
    this.name = 'Spider Man';
  }

  reset():void {
    this.name = 'Iron Man';
    this.age = 45;
  }
}
