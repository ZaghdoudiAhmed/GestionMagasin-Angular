import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {Produit} from "../produit";
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
  providers: [NgbRatingConfig]
})
export class OneProductComponent implements OnInit {
  id : number=0;
  product : Produit ;
  constructor(private ac: ActivatedRoute, private ps: ProductService, config: NgbRatingConfig) {
    config.max = 5;
  }
  selected = 0;
  hovered = 0;
  readonly = false;
  ngOnInit(): void {

    this.ac.paramMap.subscribe(params =>this.id = (Number(params.get('id')) ))
    this.product = this.ps.getById(this.id);
    console.log(this.product.codeProduit)
    //this.product = new Produit();
    this.id=0
  }

}
