import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { CatalogueRoutingModule } from './catalogue.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ],
  declarations: [ListeProduitComponent]
})
export class CatalogueModule { }