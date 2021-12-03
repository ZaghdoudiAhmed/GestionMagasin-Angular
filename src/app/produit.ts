import {DetailProduit} from "./detail-produit";

export class Produit {
  idProduit : number;
  codeProduit : string;
  libelleProduit : string;
  prixUnitaire: number;
  detailproduit: DetailProduit = {} as DetailProduit;
}
