import { ExcelService } from './services/excel.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { FactureComponent } from './facture/facture.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component'; // <== add the imports!
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundpageComponent,
    FactureComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule, // <========== Add this line!
    ReactiveFormsModule,
    NgxPaginationModule, // <------- Module pagination
    NotifierModule,
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
