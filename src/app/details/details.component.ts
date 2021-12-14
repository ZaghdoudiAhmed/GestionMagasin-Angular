import { ActivatedRoute } from '@angular/router';
import { DetailsFacture } from './../models/DetailsFacture';
import { Component, OnInit } from '@angular/core';
import { FactureService } from './../services/facture.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detailfacture: DetailsFacture = new DetailsFacture();
  id: number;
  constructor(private sf: FactureService, private ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      (params) => (this.id = Number(params.get('id')))
    );

    this.sf.getDetails(this.id).subscribe((res) => {
      this.detailfacture = res;
      console.log(this.detailfacture);
    });
  }
}
