import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  term: string = '';
  errorExist: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(term: string) {
    this.term = term;

    this.errorExist = false;

    this.paisService.searchCountry(this.term).subscribe((countries) => {
      this.countries = countries;
    });
  }

  sugerencias(term: string) {
    this.errorExist = false;
  }
}
