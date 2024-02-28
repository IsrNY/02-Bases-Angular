import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'dbz-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name:'',
    power:0
  }

  emitCharacter():void {
    // console.log(this.character)
    if(this.character.name.length === 0 || this.character.power < 0){
      Swal.fire({
        title:'Error',
        text:'No se permiten números negativos o insertar nombres vacíos',
        icon:'warning',
        showConfirmButton:false,
        timer:2000
      });
      return;
    }
    this.onNewCharacter.emit(this.character);

    this.character = { name:'',power:0};
  }
}
