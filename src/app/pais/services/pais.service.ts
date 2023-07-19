import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string) {
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => of([])),
      delay(2000)
    );
  }

  searchCountry(term: string) {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(term: string) {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url);
  }

  viewCountry(countryCode: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${countryCode}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }
}
