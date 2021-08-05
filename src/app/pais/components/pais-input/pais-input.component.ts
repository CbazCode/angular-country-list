import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  @Input() termino: string = ''
  @Input() myplaceholder: string = ''
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  debouncer: Subject<string> = new Subject();
  ngOnInit(){
    this.debouncer
      .pipe(
        debounceTime(300) //Le digo que se demore 300ms antes de realizar el suscribe al observable
      )
      .subscribe( valor =>{
        this.onDebounce.emit(valor)
      })
  }
  buscar(){
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(){
    this.debouncer.next(this.termino)
  }

}
