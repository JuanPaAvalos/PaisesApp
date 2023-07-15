import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  errorExist: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }
// Se ejecuta cuando recibe este evento desde el input (onEnter)="buscar( $event )" 
  buscar(termino : string) {
    this.termino = termino;
    this.errorExist = false;

    this.paisService.buscarCapital( this.termino )
      .subscribe( paisesResponse => {
        this.paises = paisesResponse; 
      }, (err) => {
        this.errorExist = true;
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.errorExist = false;
  }
}
