import { Facture } from './../models/Facture';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  constructor(private _http: HttpClient, private ac: ActivatedRoute) {}
  facturesUrl: string = 'http://localhost:4200/api/SpringMVC/servlet/facture/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllFacturesFormDb(): Observable<Facture[]> {
    //return this._http.get<Facture[]>('http://localhost:3000/factures');
    return this._http.get<Facture[]>(
      this.facturesUrl + 'retrieve-all-factures'
    );
  }

  AddFacture(facture: Facture): Observable<Facture> {
    return this._http.post<Facture>(
      this.facturesUrl + 'add-facture',
      facture,
      this.httpOptions
    );
  }
  SupprimerFacture(facture: Facture) {
    return this._http.delete(
      this.facturesUrl + 'remove-facture/' + facture.idFacture
    );
  }
}
