import { Component, OnInit } from '@angular/core';

import {ProductService} from "../product.service";
import {Produit} from "../produit";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {DetailProduit} from "../detail-produit";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private ps: ProductService, private modalService: NgbModal, private router: Router, notifService: NotifierService) {
  this.notif = notifService;
  }
  private readonly notif : NotifierService;
  dp : DetailProduit = new DetailProduit();
  list: Produit[] = [];
  product: Produit = new Produit();
  index: number;
  width: number = 12;
  productToDelete: Produit = new Produit();

  ngOnInit(): void {
    this.ps.getAllProductsFromDb().subscribe(res => this.list = res);
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

  public save() {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.product.detailproduit.dateCreation=this.product.detailproduit.dateDerniereModification=utc;
    this.ps.addProduct(this.product).subscribe(res => {
      console.log('Product created!');
      this.notif.notify('success', 'Product added successfully !', 'THAT_NOTIFICATION_ID');
      this.list.push(this.product);
      this.router.navigateByUrl('/products');
    });
  }

  setProductToDelete(p: Produit, i: number) {
    this.productToDelete = p;
    this.index = i;
    console.log(this.productToDelete)
  }

  deleteProduct(p: Produit) {
    this.ps.deleteProduct(p).subscribe(res => this.router.navigateByUrl('/products'));
    this.list.splice(this.index, 1);
    this.notif.notify('error', 'Product deleted successfully !', 'THAT_NOTIFICATION_ID');
  }

  update() {
    this.ps.updateProduct(this.productToDelete).subscribe();
    this.router.navigateByUrl('/products');
    this.notif.notify('success', 'Product edited successfully !', 'THAT_NOTIFICATION_ID');
    console.log(this.productToDelete)
  }

  resize(p : Produit) {
    this.width = 8
    this.product=p;
  }
  updateDP(){
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    this.product.detailproduit.dateDerniereModification=utc;
    this.ps.updateProduct(this.product).subscribe();
  }
  getByCat(str : string){
    this.ps.getbyCategorie(str).subscribe(value => this.list=value);
  }

  sortByNewest(){
    this.ps.sortByNewest().subscribe(value => this.list=value)
  }

}
