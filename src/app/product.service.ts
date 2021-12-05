import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "./produit";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl: string ="http://localhost:4200/api/SpringMVC/servlet/product/";
  constructor(private _http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllProductsFromDb(): Observable<Produit[]>{
    console.log(this._http.get(this.productsUrl+"retrieve-all-products").subscribe(val => console.log(val)))
    return this._http.get<Produit[]>(this.productsUrl+"retrieve-all-products");
  }
  addProduct (product: Produit): Observable<Produit> {
    return this._http.post<Produit>(this.productsUrl+"add-product", product, this.httpOptions);
  }

  deleteProduct (product: Produit | number): Observable<Produit> {
    const id = typeof product === 'number' ? product : product.idProduit;
    const url=this.productsUrl+'delete-product/'+id;
    return this._http.delete<Produit>(url);
  }

  updateProduct (product: Produit): Observable<Produit> {
    return this._http.put<Produit>(this.productsUrl+"edit-product/", product, this.httpOptions);
  }

  getbyCategorie(str : string) : Observable<Produit[]>{
    return this._http.get<Produit[]>(this.productsUrl+"getByCat/"+str);
  }

  sortByNewest(): Observable<Produit[]>{
    return this._http.get<Produit[]>(this.productsUrl+"orderByDate");
  }
}
