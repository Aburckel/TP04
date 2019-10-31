import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
    public getProduits () : Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendProduit);
    }
    public getProduit(id:number) : Observable<Produit> {
      return  this.http.get<Produit[]>(environment.backendProduit).pipe(map(p => p.filter(p=>p.id == +id)));
    }
}