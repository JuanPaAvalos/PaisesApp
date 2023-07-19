import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  //inputs y outputs a componentes padres
  // es buena practica usar on + PascalCase para nombrar eventos
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() searchPlaceholder: string = '';

  term: string = '';

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    /*
      se declara el debpuncer como un Subjet (escucha y emite cambios)
      cuando se activa el evento "teclaPresionada( $event )" recibe el valor del input o del evento
      el pipe de { debounceTime } from 'rxjs'; permite saber cuando ya no se escribre por x milisegundos
      suscribe el "valor" a cualquier cambio de 'debouncer' y emite el evento onDebounce
    */
    this.debouncerSubscription = this.debouncer.pipe(debounceTime(900)).subscribe((value) => {
      console.log('debouncer', value);
      this.onDebounce.emit(value)
    });
  }

  ngOnDestroy(): void {
    console.log("destruido input  ");
    this.debouncerSubscription?.unsubscribe()
  }

  buscar() {
    this.onEnter.emit(this.term);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(this.term);
  }
}
