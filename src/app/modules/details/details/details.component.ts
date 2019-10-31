import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { ApiService } from '../../../api.service';
import { Produit } from '../../../models/produit';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  produit: Observable<Produit>;

  constructor(private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.produit = this.apiService.getProduit (this.route.snapshot.params.id);
  }
}