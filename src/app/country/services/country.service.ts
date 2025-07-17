import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestCountry} from '../interfaces/rest-countries.interface';
import {map, Observable, catchError, throwError} from 'rxjs';
import {CountryMapper} from '../mapper/country.mapper';
import {CountryInterface} from '../interfaces/country.interface';


const API_URL = `https://restcountries.com/v3.1`
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient)


  searchByCapital(query: string):Observable<CountryInterface[]>{
    query = query.toLowerCase();
    return this.http.get<RestCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map(CountryMapper.mapRestCountrytoCountryArray),
      catchError(err => {
        console.log(err)
        return throwError(()=> new Error(`No se pudo obtener la informacion con ese query: ${query}`))
      })
    )
  }

  searchByCountry(query: string):Observable<CountryInterface[]>{
    query = query.toLowerCase();
    return this.http.get<RestCountry[]>(`${API_URL}/name/${query}`).pipe(
      map(CountryMapper.mapRestCountrytoCountryArray),
      catchError(err => {
        console.log(err)
        return throwError(()=> new Error(`No se pudo obtener la informacion con ese query: ${query}`))
      })
    )
  }
}
