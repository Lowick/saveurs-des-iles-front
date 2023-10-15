import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient, private router: Router) {}

   login(data: { email: string; password: string }) {
    interface ApiResponse {
      accessToken: string;
    }

    return this.http
      .post<ApiResponse>(`http://localhost:3000/api/auth/login`, data)
      .subscribe((res: ApiResponse) => {
        localStorage.setItem('token', res.accessToken);
        // this.router.navigate(['/home']);
      });
  }

register(data: {
 
  email:string;
  password:string;
}) {
    return this.http.post(`http://localhost:3000/api/auth/register`, data);
  }



}
