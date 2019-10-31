import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../api.service';
import { Produit } from '../../../models/produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  produits : Observable<Produit[]>

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.produits = this.apiService.getProduits ();
  }
}