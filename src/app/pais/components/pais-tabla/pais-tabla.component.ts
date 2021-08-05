import { Component, Input, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  @Input() list: Country[] = []
  constructor() { }

}
