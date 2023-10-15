import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService,
    private router: Router
  ){
    this.registerForm = new FormGroup({
      pseudo: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConf: new FormControl(''),
    });
  }

  ngOnInit() {
    // à l initialisation de...
    this.registerForm = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordConf: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  register() {
    if (this.registerForm) {
      const data = {
        pseudo: this.registerForm.get('pseudo')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,

        
      };

      this.inscriptionService.register(data).subscribe((response) => {
        console.log('User ajouté!' + response);
        alert('Votre incription a bien été pris en compte, merci de vous connecter afin de commencer votre voyage!!')
         location.reload();
      });
    } else {
      alert('Formulaire invalide');
    }
  }

}