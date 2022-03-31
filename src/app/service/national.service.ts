import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {National} from "../model/national";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class NationalService {

  constructor(private http: HttpClient) { }

  getAllNational(): Observable<National[]> {
    return this.http.get<National[]> (API_URL + '/nationals');
  }
}
