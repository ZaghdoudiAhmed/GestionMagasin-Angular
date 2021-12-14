import { Facture } from './../models/Facture';
import { DetailsFacture } from './../models/DetailsFacture';
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

  // getAllFacturesFormDb(): Observable<Facture[]> {
  //   //return this._http.get<Facture[]>('http://localhost:3000/factures');
  //   return this._http.get<Facture[]>(
  //     this.facturesUrl + 'retrieve-all-factures'
  //   );
  // }

  getAllDetailFacture(): Observable<DetailsFacture[]> {
    return this._http.get<DetailsFacture[]>(
      'http://localhost:4200/api/SpringMVC/servlet/details/facture/retrieve-all-details-factures'
    );
  }

  // AddFacture(facture: Facture): Observable<Facture> {
  //   return this._http.post<Facture>(
  //     this.facturesUrl + 'add-facture',
  //     facture,
  //     this.httpOptions
  //   );
  // }

  CreateFacture(detailfacture: DetailsFacture): Observable<DetailsFacture> {
    return this._http.post<DetailsFacture>(
      'http://localhost:4200/api/SpringMVC/servlet/details/facture/add-dfacture',
      detailfacture,
      this.httpOptions
    );
  }

  SupprimerFacture(detailfacture: DetailsFacture): Observable<Facture> {
    const url =
      this.facturesUrl + 'remove-facture/' + detailfacture.facture.idFacture;

    return this._http.delete<Facture>(url);
  }

  getDetails(id: number): Observable<DetailsFacture> {
    return this._http.get<DetailsFacture>(
      'http://localhost:4200/api/SpringMVC/servlet/details/facture/getDetails/' +
        id
    );
  }

  ModifierFacture(detailfacture: DetailsFacture): Observable<DetailsFacture> {
    return this._http.put<DetailsFacture>(
      'http://localhost:4200/api/SpringMVC/servlet/details/facture/edit-dfacture',
      detailfacture
    );
  }

  BloqueFacture(detailFacture: DetailsFacture): Observable<Facture> {
    const url =
      this.facturesUrl + 'bloqueFacture/' + detailFacture.facture.idFacture;
    return this._http.put<Facture>(url, detailFacture.facture.idFacture);
  }
}
