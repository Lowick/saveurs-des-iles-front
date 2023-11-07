import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

constructor(private http:HttpClient) { }

  create(reservation:Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(
      `http://localhost:3000/api/reservation`, reservation
    );
  }


 getAllReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>('http://localhost:3000/api/reservation');
  }
}
