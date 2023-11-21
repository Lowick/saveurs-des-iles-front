import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
//  public isConnected$ = BehaviorSubject<boolean>;
  public isAdmin$ = new BehaviorSubject<boolean>(false);
  public isConnected$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    const token= localStorage.getItem('token');
    if(token){
      this.isConnected$=new BehaviorSubject(true);
    } else{
      this.isConnected$=new BehaviorSubject(false);
    }
  }

  
  


   login(data: { email: string; password: string }) {
    interface ApiResponse {
      accessToken: string;
      utilisateur:Utilisateur;
    }

    return this.http
      .post<ApiResponse>(`http://localhost:3000/api/auth/login`, data)
      .subscribe((res: ApiResponse) => {
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('id',res.utilisateur.id!.toString());
        localStorage.setItem('pseudo', res.utilisateur.pseudo);
         this.isAdmin$.next(!!localStorage.getItem('admin'));
       
        this.router.navigate(['/home']);
      });
  }

register(data: {
 
  email:string;
  password:string;
}) {
    return this.http.post(`http://localhost:3000/api/auth/register`, data);
  }

logout() {
    // Supprimez les éléments liés à l'authentification du stockage local
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('pseudo');
    
    
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }

}
