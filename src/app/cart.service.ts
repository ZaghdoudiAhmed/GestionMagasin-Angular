import { Injectable } from '@angular/core';
import {Produit} from "./produit";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items : Produit[]=[];
  sum : number = 0;

  addToCart(product: Produit) {
    this.items.push(product);
    this.sum+=product.prixUnitaire;
  }



  getSum() : number{
    return this.sum;
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.sum=0;
    return this.items;
  }
}
