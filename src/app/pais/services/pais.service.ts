import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1/";

  constructor(private http: HttpClient) { }

  buscarPais(termino: string) {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  buscarCapital(termino: string) {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  buscarRegion(termino: string) {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  verPais(paisCodigo: string): Observable<Country[] | null> {
    const url = `${this.apiUrl}/alpha/${paisCodigo}`;
    return this.http.get<Country[]>(url)
      // .pipe(
      //   map( paises => paises.length > 0 ? paises[0] : null),
      //   catchError(error => of([]))
      // );
      .pipe(
        catchError(error => of([]))
      )
  }
}

