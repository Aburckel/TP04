import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './states/panier.state';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ApiService } from './api.service';
import { TetiereComponent } from './tetiere/tetiere.component';

const routes: Routes =[
  {
    path:"",
    loadChildren: () => import('./modules/accueil/accueil.module').then(m => m.AccueilModule) },
  {
    path:"accueil",
    loadChildren: () => import('./modules/accueil/accueil.module').then(m => m.AccueilModule) },
  {
    path:"catalogue",
    loadChildren: () => import('./modules/catalogue/catalogue.module').then(m => m.CatalogueModule) },
  {
    path:"panier",
    loadChildren: () => import('./modules/panier/panier.module').then(m => m.PanierModule) },
  {
    path:"compte",
    loadChildren: () => import('./modules/compte/compte.module').then(m => m.CompteModule) }
    
  
]


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule, NgxsModule.forRoot([
    PanierState
  ]) ],
  declarations: [ AppComponent, TetiereComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
