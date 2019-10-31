import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilRoutingModule } from './accueil.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccueilRoutingModule
  ],
  declarations: [AccueilComponent]
})
export class AccueilModule { }