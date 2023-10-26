import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plat } from '../models/plat';
import { Observable } from 'rxjs';
import { CreatePlatResponse } from '../models/create-plat-response';

@Injectable({
  providedIn: 'root'
})
export class PlatService {


  constructor(private http:HttpClient) { }

  create(plat:Plat): Observable<CreatePlatResponse>{
    return this.http.post<CreatePlatResponse>(
      `http://localhost:3000/api/plat`, plat
    );
  }

  getAllPlat():Observable<Plat[]>{
    return this.http.get<Plat[]>('http://localhost:3000/api/plat');
  }

   getPlatById(id:number){
    return this.http.get(`hhtp://localhost:3000/api/plat/${id}`)
  }

}
