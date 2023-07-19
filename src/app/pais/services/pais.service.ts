import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { cacheStore } from '../interfaces/cacheStorage.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  public cacheStore: cacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { term: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    this.getFromLocalStorage();
  }

  private getCountriesRequest(url: string) {
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => of([])),
      delay(400)
    );
  }

  private setToLocalStorage() {
    localStorage.setItem('countriesCache', JSON.stringify(this.cacheStore));
  }

  private getFromLocalStorage() {
    //siempre para obtener del local storage llamar esta funcion en el consteructor
    if (!localStorage.getItem('countriesCache')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('countriesCache')!);
  }

  searchCountry(term: string) {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountry = { term: term, countries: countries })
      ),
      tap(() => this.setToLocalStorage())
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { term: term, countries: countries })
      ),
      tap(() => this.setToLocalStorage())
    );
  }

  searchRegion(term: string) {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byRegion = { term: term, countries: countries })
      ),
      tap(() => this.setToLocalStorage())
    );
  }

  viewCountry(countryCode: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${countryCode}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }
}
