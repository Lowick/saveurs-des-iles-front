import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  public suppression$= new Subject<Reservation[]>;

constructor(private http:HttpClient) { }

  create(reservation:Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(
      `http://localhost:3000/api/reservation`, reservation
    );
  }


 getAllReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>('http://localhost:3000/api/reservation');
  }

  deleteReservation(id:number):Observable<Reservation>{
    return this.http.delete<Reservation>(`http://localhost:3000/api/reservation/${id}`);
  }
}
