import { Component } from '@angular/core';
import { Character } from '../../interfaces/dbz';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(
    private dbzService:DbzService
  ){}

  get characters():Character[] {
    return [...this.dbzService.dbzCharacters];
  }

  onDeleteCharacter(id:string):void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character:Character) {
    this.dbzService.addCharacter(character)
  }
}
