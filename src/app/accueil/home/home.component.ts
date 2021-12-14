import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {Produit} from "../../produit";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ps: ProductService, private cs: CartService) { }
  list : Produit[];
  ngOnInit(): void {
    this.ps.getAllProductsFromDb().subscribe(val => this.list=val);
  }
  addToCart(product : Produit){
    this.cs.addToCart(product);
    window.alert('Your product : "' +product.libelleProduit +'" has been added to the cart!');
  }

}
