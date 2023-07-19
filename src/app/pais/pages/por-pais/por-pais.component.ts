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
  initialTerm: string = '';
  errorExist: boolean = false;
  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countryService: PaisService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries
    this.initialTerm = this.countryService.cacheStore.byCountry.term
  }

  search(term: string) {
    this.term = term;
    this.errorExist = false;
    this.isLoading = true;
    this.countryService.searchCountry(this.term).subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });
  }

  sugestions(term: string) {
    this.errorExist = false;
  }
}
