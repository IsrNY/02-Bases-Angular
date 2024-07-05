import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/dbz';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public characterList:Character[] = [
    {
      name:'Trunks',
      power:100
    }
  ]
}
