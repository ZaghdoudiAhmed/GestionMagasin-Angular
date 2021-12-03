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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundpageComponent,
    FactureComponent,
    ProductsComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
