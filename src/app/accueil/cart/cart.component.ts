import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Produit} from "../../produit";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items : Produit[]=[];
  sum : number = 0;
  constructor(private cs : CartService) { }

  ngOnInit(): void {
    this.items= this.cs.getItems();
    this.sum=this.cs.getSum();
  }

  deleteItem(i : number, p : Produit){
    this.items.splice(i,1);
    this.sum-=p.prixUnitaire
  }

}
