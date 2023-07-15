import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent  {

 
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania', ];
  regionActiva: string = '';
  errorExist: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  buscarPorRegion(region : string){
    this.regionActiva = region;
    this.errorExist = false;

    this.paisService.buscarRegion(this.regionActiva)
    .subscribe(paisesResponse => {
      this.paises = paisesResponse;
    }, (err) => {
      this.errorExist = true;  
    }
    )

    // this.paisService.buscarCapital( this.termino )
    // .subscribe( paisesResponse => {
    //   this.paises = paisesResponse; 
    // }, (err) => {
    //   this.errorExist = true;
    //   this.paises = [];
    // })

  }

  getBtnClass( region : string ){
    return (this.regionActiva === region) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
