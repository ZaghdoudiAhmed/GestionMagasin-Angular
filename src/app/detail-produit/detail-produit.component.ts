import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {DetailProduitService} from "../detail-produit.service";
import {DetailProduit} from "../detail-produit";
import {Produit} from "../produit";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
   list:DetailProduit[];
  listpro: string[]=[];
  p : Produit=new Produit();
  constructor(private ds : DetailProduitService, private modalService: NgbModal, private router: Router ){ }

  ngOnInit(): void {
    this.ds.getAllProductsFromDb().subscribe(res=> this.list=res);
  }


  ind : number=0
  test(){
    for (let d of this.list){
      this.ds.getProduct(d.idDetailProduit).subscribe(res => this.ind = res)
      this.listpro.push(this.ind.toString())
    }
    console.log(this.listpro)
  }
  sortDP(){
    this.ds.sortDetails().subscribe(res=> this.list=res);
  }

}
