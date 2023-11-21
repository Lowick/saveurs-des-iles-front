import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  constructor( private fb: FormBuilder, private inscriptionService: InscriptionService, private authInterceptorService: AuthInterceptorService){}
  ngOnInit(): void {
  }

   loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  login() {
    const data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.inscriptionService.isConnected$.next(true);
    this.inscriptionService.login(data);
    alert('ok bon voyage')
  }

  connecter(){
    this.inscriptionService.isConnected$.next(true);
  }
}
