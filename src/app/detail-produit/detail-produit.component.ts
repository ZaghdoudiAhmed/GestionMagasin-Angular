import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
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
  dp : DetailProduit= new DetailProduit();
  dpt : DetailProduit= new DetailProduit();
  listpro: string[]=[];
  p : Produit=new Produit();
  constructor(private ds : DetailProduitService, private modalService: NgbModal, private router: Router ){ }

  ngOnInit(): void {
    this.ds.getAllProductsFromDb().subscribe(res=> this.list=res);
  }

  closeResult = '';

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
  addDetail(){
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.dp.dateCreation=utc;
    this.dp.dateDerniereModification=utc;
    console.log(this.dp)
    this.dpt.categorieProduit="quincaillerie"
    this.ds.save(this.dpt);
    console.log('detail created!');
    this.list.push(this.dp);
  }

}
