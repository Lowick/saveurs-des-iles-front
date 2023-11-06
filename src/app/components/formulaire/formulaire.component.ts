import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  reservationForm!: FormGroup;
  reservation!:Reservation;
  idutilisateur!:number;

  constructor(
    private formbuilder: FormBuilder,
    private utilisateurService: UtilisateurService,
    private reservationService: ReservationService,
    private router:Router
  ){}

  ngOnInit():void{
    this.reservationForm = this.formbuilder.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      service:['', Validators.required],
      personnes:['', Validators.required],
      telephone:['', Validators.required],
      commentaire:['', Validators.required]

    })
  }

  
  onSubmit() {
   console.log('FORMULAIRE ENVOYER',this.reservationForm.value)
    if (this.reservationForm.valid) {

      
      const reservation = {
        nom: this.reservationForm.get('nom')?.value,
        prenom: this.reservationForm.get('prenom')?.value,
        service:this.reservationForm.get('service')?.value,
        nombre_de_personne:this.reservationForm.get('personnes')?.value,
        telephone:this.reservationForm.get('telephone')?.value,
        message:this.reservationForm.get('commentaire')?.value,
        idutilisateur:this.idutilisateur,
      };
      (console.log('la data est elle bonne,:', reservation));
    
 
      // Envoyez les données à l'API
      this.reservationService.create(reservation).subscribe({
        next: response => {
          // Gérez la réponse du backend ici (par exemple, une redirection ou un message de succès)
          console.log('Réponse du backend :', response);
         
          this.router.navigate(['/home']);
        },
        error: error => {
          // Gérez les erreurs ici
          console.error('Erreur lors de l’ajout du plat:', error);
        }
      });

    } else {
      // Affichez un message d'erreur ou effectuez une action en cas de formulaire invalide
      console.error('Formulaire invalide. Assurez-vous de remplir tous les champs requis et d’uploader les médias.');
    }
  }
  
}
