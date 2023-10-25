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
  avisForm: FormGroup;
pseudo:Utilisateur []=[];


  // avis!:string;
  // tabAvis: string[]=[];
  tabAvisPseudo : Avis[] = [];

  constructor(
    private avisService:AvisService, private formBuilder: FormBuilder,
  ){this.avisForm = this.formBuilder.group({
    pseudo:['', Validators.required],
      avis:['', Validators.required]
    });}

  

  ngOnInit():void{

    this.avisService.getAllAvis().subscribe(
  (data) => {
    console.log(data);
    this.tabAvisPseudo = data;
 }


);
  }

  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

  submitAvis(){

    const nouvelAvis = this.avisForm.value;
    console.log('nouvel avis de quoi:', nouvelAvis);

     this.avisService
              .create(nouvelAvis)
              .subscribe((avisData) => {
                console.log('avis soumis avec succès:', avisData);
              });

    console.log('Avis soumis:', this.avisForm.value);
    this.closeModal();
  }
 
  
}
