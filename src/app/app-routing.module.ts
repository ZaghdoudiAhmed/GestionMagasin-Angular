import { DetailsComponent } from './details/details.component';
import { FactureComponent } from './facture/facture.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'details/:id', component: DetailsComponent },
  {
    path: 'FactureModule',
    loadChildren: () =>
      import('./facture-module/facture-module.module').then(
        (m) => m.FactureModuleModule
      ),
  },

  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
