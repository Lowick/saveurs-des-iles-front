import { Component, Input } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { ImagesService } from 'src/app/services/images.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-card-plat',
  templateUrl: './card-plat.component.html',
  styleUrls: ['./card-plat.component.css']
})
export class CardPlatComponent {
  @Input()plat!: Plat;
  currentImage!: Blob;
  platCurrentImage!:Blob;
  platImage!: any;
  platImageid!:number;
  

  constructor(private imagesService : ImagesService, private platService : PlatService){}

  ngOnInit(){
if(this.plat){
    this.platImageid = this.plat.idimage;
    console.log(this.platImageid);

//     this.platService.getPlatById(this.plat.id).subscribe({
//       next:(response) =>{
// this.plat.id = response;
//       }
//     })

    this.imagesService.getImageById(this.platImageid.toString()).subscribe({
      next: (data: Blob) =>{
        // Lorsque l'image est récupérée avec succès depuis le service...
        this.currentImage = data; 
        console.log('cest quoi ca:',this.currentImage),
        this.createImageFromBlob(this.currentImage); // ...crée une image à partir du Blob.

      },
        error: (error) => {
        // En cas d'erreur lors de la récupération de l'image...
        console.error("Une erreur s'est produite : ", error);
        },
    })
  }
  }
  createImageFromBlob(image: Blob) {
    // Fonction pour créer une image à partir d'un Blob.
    console.log('donne:',image);
    let reader = new FileReader();
    
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.platImage = reader.result; // Affecte l'image créée à la propriété characterImage pour l'affichage.
      console.log(reader.result)
    });

  }
}


