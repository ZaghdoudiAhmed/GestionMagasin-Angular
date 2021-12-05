import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "./produit";
import {DetailProduit} from "./detail-produit";

@Injectable({
  providedIn: 'root'
})
export class DetailProduitService {

  detailUrl: string ="http://localhost:4200/api/SpringMVC/servlet/product-details/";
  constructor(private _http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllProductsFromDb(): Observable<DetailProduit[]>{
    //console.log(this._http.get(this.detailUrl+"retrieve-all-products").subscribe(val => console.log(val)))
    return this._http.get<DetailProduit[]>(this.detailUrl+"retrieve-all-details");
  }
  p : Produit=new Produit();
  getProduct(i : number): Observable<number>{
    return this._http.get<number>(this.detailUrl+"retrive-product/"+i);
  }

  sortDetails(): Observable<DetailProduit[]>{
    return this._http.get<DetailProduit[]>(this.detailUrl+"retrieve-all-details/new");
  }
  save(d : DetailProduit) : Observable<DetailProduit>{
    return this._http.post<DetailProduit>(this.detailUrl+"add-detail", d, this.httpOptions);
  }
}
