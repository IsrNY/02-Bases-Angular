import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public heroName: string = 'Iron Man';
  public name:string = 'Tony Stark';
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeAge():void {
    this.age = 55;
  }

  changeName():void {
    this.name = 'Antonio';
    this.heroName = 'El hombre fierros'
  }
}
