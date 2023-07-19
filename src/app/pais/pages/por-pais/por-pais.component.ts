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
  isLoading: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.term = term;
    this.errorExist = false;
    this.isLoading = true;
    this.paisService.searchCountry(this.term).subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });
  }

  sugestions(term: string) {
    this.errorExist = false;
  }
}
