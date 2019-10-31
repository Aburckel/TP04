import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier/panier.component';
import { PanierRoutingModule } from './panier.routing.module';


@NgModule({
  imports: [
    CommonModule,
    PanierRoutingModule
  ],
  declarations: [PanierComponent]
})
export class PanierModule { }