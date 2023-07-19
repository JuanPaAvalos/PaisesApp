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
  isLoading: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
  // Se ejecuta cuando recibe este evento desde el input (onEnter)="buscar( $event )"
  search(termino: string) {
    this.term = termino;
    this.errorExist = false;
    this.isLoading = true;
    this.paisService.searchCapital(this.term).subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });
  }

  sugestions(termino: string) {
    this.errorExist = false;
  }
}
