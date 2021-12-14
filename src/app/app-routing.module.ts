import { FactureComponent } from './facture/facture.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { HomeComponent } from './accueil/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";
import {CartComponent} from "./accueil/cart/cart.component";
import {OneProductComponent} from "./one-product/one-product.component";

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  //{ path : 'home', loadChildren:()=>import('./home-module').then(m => m.homeModule)},

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'facture', component: FactureComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-details', component: DetailProduitComponent },
  {path: 'product/:id', component: OneProductComponent},
  { path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module')
      .then(m => m.AccueilModule) },
  { path: '**', component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
