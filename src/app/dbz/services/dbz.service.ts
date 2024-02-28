import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters:Character[] = [
    {
    id: uuid(),
    name:'Krilin',
    power:1000
    },
    {
      id: uuid(),
      name:'Goku',
      power:9000
    },
    {
      id: uuid(),
      name:'Vegeta',
      power:5000
    },
    {
      id:uuid(),
      name:'Broly',
      power:50000
    }
  ];

  addCharacter(character:Character):void {
    const newCharacter:Character = {id:uuid(), ...character}
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
    // this.characters.splice(index,1);
  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
