import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  getCategorie():Observable<Categorie[]>{
    return this.http.get<Categorie[]>('http://localhost:3000/api/categorie');
  }

  getCategorieById(id:number){
    return this.http.get(`hhtp://localhost:3000/api/image/${id}`)
  }
}
