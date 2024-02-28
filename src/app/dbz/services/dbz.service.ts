import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor(
  ) { }

  public characters:Character[] = [
    {
    name:'Krilin',
    power:1000
    },
    {
      name:'Goku',
      power:9000
    },
    {
      name:'Vegeta',
      power:5000
    },
    {
      name:'Broly',
      power:50000
    }
  ];

  onNewCharacter(character:Character):void {
    // console.log('Main',character)
    this.characters.push(character);
  }

  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }
}
