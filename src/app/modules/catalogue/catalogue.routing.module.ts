import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeProduitComponent } from './liste-produit/liste-produit.component';

const routes : Routes = [
  {
    path:'',
    component: ListeProduitComponent,
  },
  {
    path:"details/:id",
    loadChildren: () => import('../details/details.module').then(m => m.DetailsModule) 
  }, 

];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CatalogueRoutingModule { }