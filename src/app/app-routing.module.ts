import { FactureComponent } from './facture/facture.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'facture', component: FactureComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: DetailProduitComponent },
  { path: '**', component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
