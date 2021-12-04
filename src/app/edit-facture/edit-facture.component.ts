import { Facture } from './../models/Facture';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-facture',
  templateUrl: './edit-facture.component.html',
  styleUrls: ['./edit-facture.component.css'],
})
export class EditFactureComponent implements OnInit {
  myForm: FormGroup;
  @Input() factureToEdit: Facture;

  constructor() {}

  ngOnInit(): void {}
}
