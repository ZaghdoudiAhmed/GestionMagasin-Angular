import { FactureService } from './../services/facture.service';
import { Facture } from './../models/Facture';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent implements OnInit {
  FormFacture: FormGroup;
  listFacture: Facture[];
  show: Boolean = false;
  closeResult = '';
  // page = 1;
  // pageSize = 4;
  // collectionSize = this.listFacture.length;

  constructor(private sf: FactureService, private modalService: NgbModal) {}

  ngOnInit(): void {
    //  this.FormFacture = new FormGroup({
    //    montantFacture: new FormControl('', [Validators.required]),
    //   montantRemise: new FormControl('', [Validators.required]),
    //  dateFacture: new FormControl('', [Validators.required]),
    //  });

    this.sf.getAllFacturesFormDb().subscribe((res) => {
      this.listFacture = res;
      console.log(this.listFacture);
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openEdit(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
  // refreshFactures() {
  //   this.listFacture = this.listFacture
  //     .map((facture, i) => ({
  //       id: i + 1,
  //       ...facture,
  //     }))
  //     .slice(
  //       (this.page - 1) * this.pageSize,
  //       (this.page - 1) * this.pageSize + this.pageSize
  //     );
  // }
}
