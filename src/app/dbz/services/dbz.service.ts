import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public dbzCharacters: Character[] = [
    {
      id:uuid(),
      name:'Goku',
      power:10000
    },
    {
      id:uuid(),
      name:'Krillin',
      power:3000
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:8000
    }
  ]

  addCharacter(character:Character):void {
    const newCharacter:Character = {
      id:uuid(),
      ...character
    };

    this.dbzCharacters.push(newCharacter)
  }

  deleteCharacterById(id:string):void {
    this.dbzCharacters = this.dbzCharacters.filter(character => character.id !== id )
  }
}
