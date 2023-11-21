import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  
 

  constructor(private http:HttpClient) { }

  getAllUtilisateur():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>('http://localhost:3000/api/utilisateur');
  }

  getUtilisateurById(id:number): Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`http://localhost:3000/api/utilisateur/${id}`)
  }
}
