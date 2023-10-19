import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avis } from '../models/avis';
import { Observable, observable } from 'rxjs';
import { AvisData } from '../models/avis-data';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private http: HttpClient) {}

  create(
    
    avisdata:{idutilisateur:number; avis:string}
    
  ){console.log('cest quoi ca:'+ avisdata)
    return this.http.post(
     `http://localhost:3000/api/avis`,avisdata
    );
  }
  getAllAvis(): Observable<Avis[]>{
    return this.http.get<Avis[]>(`http://localhost:3000/api/avis`);
  }


getAvis(id: number) : Observable<AvisData[]>{
    

    return this.http.get<AvisData[]>(
      `http://localhost:3000/api/avis`
    );
  }

}
