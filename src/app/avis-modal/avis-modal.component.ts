import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AvisService } from '../services/avis.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';
import { Avis } from '../models/avis';

@Component({
  selector: 'app-avis-modal',
  templateUrl: './avis-modal.component.html',
  styleUrls: ['./avis-modal.component.css']
})
export class AvisModalComponent {
  isModalOpen = true;
  avisForm!: FormGroup;
  pseudo:Utilisateur[]=[];
  utilisateur!:number;
  utilisateurs:Utilisateur[] = [];

  avis!:Avis[];

  constructor(private formBuilder: FormBuilder, private avisService:AvisService, private utilisateurService:UtilisateurService){}
   
   ngOnInit():void{
    this.avisForm = this.formBuilder.group({
      commentaire:['', Validators.required],
      idutilisateur:[null]
    });
   }

  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

  submitAvis(){

    if(this.avisForm.valid){
    const avis = {...this.avisForm.value, idutilisateur:Number(localStorage.getItem('id'))};

    console.log('cest quoi:' + this.avisForm.value)

     this.avisService
              .create(avis)
              .subscribe((avisdata) => {
                console.log('avis soumis avec succès:', avisdata);
              });

    console.log('Avis soumis:', this.avisForm.value);
    this.closeModal();
  }

}}
