import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit{
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  errorExist: boolean = false;
  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countryService: PaisService) {}


  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries
    this.activeRegion = this.countryService.cacheStore.byRegion.term
  }

  searchByRegion(region: string) {
    this.isLoading = true;
    this.activeRegion = region;
    this.errorExist = false;
    this.countryService.searchRegion(this.activeRegion).subscribe((countries) => {
      this.isLoading = false;
      this.countries = countries;
    });

    // this.paisService.buscarCapital( this.termino )
    // .subscribe( paisesResponse => {
    //   this.paises = paisesResponse;
    // }, (err) => {
    //   this.errorExist = true;
    //   this.paises = [];
    // })
  }

  getBtnClass(region: string) {
    return this.activeRegion === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
