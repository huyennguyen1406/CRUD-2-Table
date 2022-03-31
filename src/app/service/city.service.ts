import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../model/city";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor(private http: HttpClient) { }

  getAllCity(): Observable<City[]> {
    return this.http.get<City[]>(API_URL + '/cities');
  }

  getCityById(id: number): Observable<City> {
    return this.http.get<City>(API_URL + '/cities/' + id);
  }

  createCity(city: City): Observable<any> {
    return this.http.post(API_URL + '/cities', city);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(API_URL + '/cities/' + id);
  }
}
