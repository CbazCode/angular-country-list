import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {
  placeholder:string = "Buscar por capital..."
  termino: string = ''
  hayError: boolean = false;
  capitales: Capital[] = [];

  constructor(private capitalService: CapitalService) {   }
  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.capitalService.buscarCapital(this.termino).subscribe( (res)=> {
      console.log(res)
      this.capitales=[...res]
    }, (err)=>{
      this.hayError = true;
      this.capitales = []
      console.log(err)
    })
  }

  sugerencias(termino:string){
    this.hayError = false
  }

}


