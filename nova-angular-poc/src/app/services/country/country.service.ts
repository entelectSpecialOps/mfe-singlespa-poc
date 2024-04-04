import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Country } from '../../country/country';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private country: string = '';

  private url = 'https://api.api-ninjas.com/v1/country';

  constructor(private http: HttpClient) { 
  }

  getCountry(country: string) {
    this.country = country;

    return this.http.get<[Country]>(this.url,{ headers: {'Content-Type':'application/json;','X-Api-Key':'g5JJOWG4onl+LvQGy/wFGA==KPiVGmOg6rpbq6Ih'}, params: {'name':this.country}}).pipe(first());
  }

  getCountryList() {
    return this.http.get<[Country]>(this.url,{ headers: {'Content-Type':'application/json;','X-Api-Key':'g5JJOWG4onl+LvQGy/wFGA==KPiVGmOg6rpbq6Ih'}, params: {'currency':'EUR'}}).pipe();
  }
}
