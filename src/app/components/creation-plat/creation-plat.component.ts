import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Images } from 'src/app/models/images';
import { Plat } from 'src/app/models/plat';
import { CategorieService } from 'src/app/services/categorie.service';
import { ImagesService } from 'src/app/services/images.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-creation-plat',
  templateUrl: './creation-plat.component.html',
  styleUrls: ['./creation-plat.component.css']
})
export class CreationPlatComponent {
   @Output() categorieChanged = new EventEmitter<string>();
  platForm!:FormGroup;
  plat!:Plat;
  categorieList!:Categorie[];
  image!:Images;
  selectedFile!:File;
  imageid!:number;

 


  constructor(private platService:PlatService,
     private imageService:ImagesService,
     private categorieService:CategorieService,
      private formbuilder:FormBuilder,
      private router:Router){}

  ngOnInit(): void{
    this.platForm = this.formbuilder.group({
      nom:['', Validators.required],
      categorie:['', Validators.required],
      imageid:[null, Validators.required],
    })

    this.categorieService.getCategorie().subscribe((categories) =>{console.log(categories)
      this.categorieList=categories;
      
    })
  }

     onCategorieChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    console.log(selectElement);
    const selectedId = selectElement.value;
    
    this.categorieChanged.emit(selectedId);
  }

  onSubmit() {
   console.log('FORMULAIRE ENVOYER',this.platForm.value)
    if (this.platForm.valid) {

      
      const platData = {
        nom: this.platForm.get('nom')?.value,
        categorie:this.platForm.get('categorie')?.value,
  
        
        imageid: this.imageid
      };
    
  //  console.log('DATA ENVOYER AU BACKEND  : ', meditationData)
      // Envoyez les données à l'API
      this.platService.create(platData).subscribe({
        next: response => {
          // Gérez la réponse du backend ici (par exemple, une redirection ou un message de succès)
          console.log('Réponse du backend :', response);
          console.log('this.imageId:', this.imageid);
          this.router.navigate(['/profil']);
        },
        error: error => {
          // Gérez les erreurs ici
          console.error('Erreur lors de l’ajout de la méditation:', error);
        }
      });

    } else {
      // Affichez un message d'erreur ou effectuez une action en cas de formulaire invalide
      console.error('Formulaire invalide. Assurez-vous de remplir tous les champs requis et d’uploader les médias.');
    }
  }



  onFileSelected(event:Event){
    const input = event.target as HTMLInputElement;
    console.log(input.files![0])
    if(input.files && input.files.length){
      this.selectedFile = input.files[0]
    }
  }

  onVisualSelected(event:any){
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('monFichier', file);
  

  this.imageService.postImage(formData).subscribe({
    next:(response:any)=>{
      if(response && response.id){
        console.log('Visuel enregistré avec succès. ID:', response.id);
        this.imageid = response.id;
      }

      },
  error: (error: any) => {
        console.error('Erreur lors de lupload du média visuel :', error);
        alert('Erreur lors de lenregistrement du média visuel');
      }
    });
  }
  
  


}