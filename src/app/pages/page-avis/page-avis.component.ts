import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Avis } from 'src/app/models/avis';
import { AvisData } from 'src/app/models/avis-data';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-page-avis',
  templateUrl: './page-avis.component.html',
  styleUrls: ['./page-avis.component.css']
})
export class PageAvisComponent {
isModalOpen = false;
  avisForm!: FormGroup;
pseudo!:Utilisateur [];
  utilisateur!:number;
  utilisateurs:Utilisateur[] = [];
  

 
  // avis!:string;
  // tabAvis: string[]=[];
  tabAvisPseudo : Avis[] = [];

  constructor(
    private avisService:AvisService, private formBuilder: FormBuilder,
  ){}

  

  ngOnInit():void{
    this.avisService.postAvis$.subscribe((resp)=>{
      this.tabAvisPseudo=resp;
    })

    this.avisService.getAllAvis().subscribe(
  (data) => {
    console.log(data);
    this.tabAvisPseudo = data;
 });

this.avisForm = this.formBuilder.group({
  
      avis:['', Validators.required],
      idutilisateur:[null]
    })

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
     this.avisService.getAllAvis().subscribe((data)=>{
      this.tabAvisPseudo=data;
      this.avisService.postAvis$.next(data);
     })           
                
              });

    console.log('Avis soumis:', this.avisForm.value);
    
   
    this.closeModal();
  }
 
  
}}
