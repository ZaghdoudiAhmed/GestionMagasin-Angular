import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { FactureComponent } from './facture/facture.component';
import { HttpClientModule } from '@angular/common/http';
import { EditFactureComponent } from './edit-facture/edit-facture.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundpageComponent,
    FactureComponent,
    EditFactureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule, // <========== Add this line!
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
