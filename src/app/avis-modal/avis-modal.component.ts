import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AvisService } from '../services/avis.service';

@Component({
  selector: 'app-avis-modal',
  templateUrl: './avis-modal.component.html',
  styleUrls: ['./avis-modal.component.css']
})
export class AvisModalComponent {
  isModalOpen = true;
  avisForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private avisService:AvisService){
    this.avisForm = this.formBuilder.group({
      nom:['', Validators.required],
      commentaire:['', Validators.required]
    });
  }

  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

  submitAvis(){

    const nouvelAvis = this.avisForm.value;

    console.log('cest quoi:' + this.avisForm.value)

     this.avisService
              .create(nouvelAvis)
              .subscribe((avisdata) => {
                console.log('avis soumis avec succès:', avisdata);
              });

    console.log('Avis soumis:', this.avisForm.value);
    this.closeModal();
  }

}
