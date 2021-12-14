import { DetailsComponent } from './../details/details.component';
import { DetailsFacture } from './../models/DetailsFacture';
import { ExcelService } from './../services/excel.service';
import { FactureService } from './../services/facture.service';
import { Facture } from './../models/Facture';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

import { NotifierService } from 'angular-notifier';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent implements OnInit {
  private readonly notifier: NotifierService;

  FormFacture: FormGroup;
  detailsFacture: DetailsFacture[] = [];
  detailfacture: DetailsFacture = new DetailsFacture();
  factureSupprimer: DetailsFacture = new DetailsFacture();
  factureBloquer: DetailsFacture = new DetailsFacture();
  factureModifier: DetailsFacture = new DetailsFacture();
  index: number;

  // factureDetail: Facture = new Facture();
  show: Boolean = false;
  p: number = 1;

  closeResult = '';

  // myForm: FormGroup;
  // @Input() factureToEdit: Facture;

  constructor(
    private sf: FactureService,
    private es: ExcelService,
    private modalService: NgbModal,
    private notifierService: NotifierService,
    private activatedroute: ActivatedRoute
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.sf.getAllDetailFacture().subscribe((res) => {
      this.detailsFacture = res;
      console.log(this.detailsFacture);
    });
  }
  //Refresh page //
  refresh(): void {
    window.location.reload();
  }
  // Model Ajouter //
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

  // Model Modifier //
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

  // Model Details //
  openDetails(content) {
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

  //Recherche //

  // Exportation CSV //
  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join('              ')
    );
    csv.unshift(header.join('   '));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, 'factures_data.csv');
  }
  // Exportation EXCEL //
  exportAsXLSX(): void {
    this.es.exportAsExcelFile(this.detailsFacture, 'factures_data');
  }
  // Ajouter Facture //
  public ajouter() {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    this.detailfacture.facture.dateFacture = utc;
    this.detailfacture.facture.active = true;
    this.sf.CreateFacture(this.detailfacture).subscribe((res) => {
      console.log(res);
      this.notifier.notify('success', 'Facture ajouter avec sucess !');
    });
    console.log(this.detailfacture);
  }

  // Supprimer Facture //
  SupprimerFacture(f: DetailsFacture) {
    console.log(f);
    this.sf.SupprimerFacture(f).subscribe((res) => {
      this.notifier.notify('error', 'Facture Supprimer avec sucess !');
    });

    this.detailsFacture.splice(this.index, 1);
  }

  FactureaSupprimer(f: Facture, i: number) {
    this.factureSupprimer.facture = f;
    this.index = i;
  }

  //Bloquer Facture //
  BloqueFacture(f: DetailsFacture) {
    this.sf.BloqueFacture(f).subscribe((res) => {
      this.notifier.notify('warning', 'Facture bloquer avec sucess !');

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }

  FactureaBloquer(f: Facture, i: number) {
    this.factureBloquer.facture = f;
    this.index = i;
  }

  //Modifier Facture //
  ShowModifierFacture(f: DetailsFacture, i: number) {
    this.show = true;
    this.factureModifier = f;
    this.index = i;
  }
  ModifierFacture(f: DetailsFacture) {
    this.sf.ModifierFacture(f).subscribe((res) => {
      window.location.reload();
    });
  }
}
