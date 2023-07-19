import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  term: string = '';
  errorExist: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
  // Se ejecuta cuando recibe este evento desde el input (onEnter)="buscar( $event )"
  search(termino: string) {
    this.term = termino;
    this.errorExist = false;

    // this.paisService.buscarCapital(this.term).subscribe(
    //   (paisesResponse) => {
    //     this.countries = paisesResponse;
    //   },
    //   (err) => {
    //     this.errorExist = true;
    //     this.countries = [];
    //   }
    // );

    this.paisService.searchCapital(this.term).subscribe((countries) => {
      this.countries = countries
    });
  }

  sugestions(termino: string) {
    this.errorExist = false;
  }
}
