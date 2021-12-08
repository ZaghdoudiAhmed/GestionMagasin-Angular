import { DetailsFacture } from './DetailsFacture';
export class Facture {
  idFacture: number;
  montantRemise: number;
  montantFacture: number;
  dateFacture: string;
  active: boolean;
  detailFacture: DetailsFacture = {} as DetailsFacture;
}
