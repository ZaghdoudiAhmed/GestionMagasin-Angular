import { Facture } from './../models/Facture';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  constructor(private _http: HttpClient, private ac: ActivatedRoute) {}

  getAllFacturesFormDb(): Observable<Facture[]> {
    return this._http.get<Facture[]>('http://localhost:3000/factures');
    //return this._http.get<Facture[]>(
    //   'http://localhost:8082/SpringMVC/servlet/factures/retrieve-all-factures'
    //  );
  }
}
