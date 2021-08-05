import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
// switchMap recibe un observable y regresa otro observable
// tap realiza efectos secundarios
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:Country
  //Observable que nos permite suscribirnos a cualquier cambio del URL
  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }
  // Observables encadenados
  // ngOnInit(): void {
  //   this.activateRoute.params.subscribe( ({ id }) => {
  //     this.paisService.getPaisPorAlpha(id).subscribe( pais => {
  //       console.log(pais)
  //     })
  //   })
  // }
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap((params)=>{
          return this.paisService.getPaisPorAlpha(params.id)
        }),
        tap( resp => console.log(resp))
      ).subscribe( resp => {
        console.log(resp)
        this.pais = resp
      })
  }

}
