import { Facture } from './Facture';
export class DetailsFacture {
  idDetailFacture: number;
  prixTotal: number;
  pourcentageRemise: number;
  montantRemise: number;
  facture: Facture = {} as Facture;
}
