import { ExcelService } from './../services/excel.service';
import { FactureService } from './../services/facture.service';
import { Facture } from './../models/Facture';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { saveAs } from 'file-saver';

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
  // collectionSize = Facture.length;
  myForm: FormGroup;
  @Input() factureToEdit: Facture;

  constructor(
    private sf: FactureService,
    private es: ExcelService,
    private modalService: NgbModal
  ) {
    // this.refreshFactures();
  }

  ngOnInit(): void {
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

  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, 'myFile.csv');
  }

  exportAsXLSX(): void {
    this.es.exportAsExcelFile(this.listFacture, 'factures_data');
  }
}
