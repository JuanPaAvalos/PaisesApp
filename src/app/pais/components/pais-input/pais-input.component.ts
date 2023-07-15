import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  //inputs y outputs a componentes padres
  // es buena practica usar on + PascalCase para nombrar eventos 
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholderBusqueda: string = '' ;

  ngOnInit(): void {
    /*
      se declara el debpuncer como un Subjes (escucha y emite cambios)
      cuando se activa el evento "teclaPresionada( $event )" recibe el valor del input o del evento
      el pipe de { debounceTime } from 'rxjs'; permite saber cuando ya no se escribre por x milisegundos 
      suscribe el "valor" a cualquier cambio de 'debouncer' y emite el evento onDebounce
    */
    this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe(valor => {
        this.onDebounce.emit(valor)
        console.log('debouncer', valor);
      })
  }

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any ) {
    console.log(event)
    const valor = event;
    //console.log(valor);
    //console.log(this.termino)

    this.debouncer.next(this.termino)
  }
}
