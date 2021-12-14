import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { FactureComponent } from './facture/facture.component';
import { ProductsComponent } from './products/products.component';
import{ HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NotifierModule} from 'angular-notifier';
import { CartComponent } from './cart/cart.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { OneProductComponent } from './one-product/one-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundpageComponent,
    FactureComponent,
    ProductsComponent,
    DetailProduitComponent,
    CartComponent,
    OneProductComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        NotifierModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
