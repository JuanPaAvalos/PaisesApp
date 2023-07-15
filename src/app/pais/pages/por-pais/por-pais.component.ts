import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  errorExist: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino : string) {
    this.termino = termino;

    this.errorExist = false;

    this.paisService.buscarPais( this.termino )
      .subscribe( paisesResponse => {
        this.paises = paisesResponse;

      }, (err) => {
        this.errorExist = true;
        console.info(err);
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.errorExist = false;
  }
}
