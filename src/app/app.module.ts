import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { FactureComponent } from './facture/facture.component';
import { ClientComponent } from './client/client.component';
import { SingupComponent } from './singup/singup.component';
import { StockComponent } from './models/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundpageComponent,
    FactureComponent,
    ClientComponent,
    SingupComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
