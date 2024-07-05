import { Component } from '@angular/core';
import { Character } from '../../interfaces/dbz';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public dbzCharacters: Character[] = [
    {
      name:'Goku',
      power:10000
    },
    {
      name:'Krillin',
      power:3000
    },
    {
      name:'Vegeta',
      power:8000
    }
  ]

  addCharacter(character:Character):void {
    this.dbzCharacters.push(character)
  }
}
