import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { Plat } from 'src/app/models/plat';
import { CategorieService } from 'src/app/services/categorie.service';
import { ImagesService } from 'src/app/services/images.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-page-plat',
  templateUrl: './page-plat.component.html',
  styleUrls: ['./page-plat.component.css']
})
export class PagePlatComponent {
  currentImage!:Blob;
  platCurrentImage!:Blob;
  platImage!:any;
  isImageLoading!: Boolean;

  allPlats!: Plat[];
  platsFilter: Plat[] = [];
  
  allCategories!:Categorie[];
  platCategorie!:Categorie[];
  categorieToDisplay:string[] = [];
  categorieChecked!: number[];// à recevoir de l'output de filterbar

  constructor(
    private platService: PlatService,
    private imagesService: ImagesService,
    private categorieService: CategorieService,
  ){}

  ngOnInit(){
    this.platService.getAllPlat().subscribe({
      next:(response)=>{
        this.allPlats=response;
        this.platsFilter = [...this.allPlats];
        console.log('dans on init les plats à afficher',this.platsFilter);
        
      }
    });

    this.categorieService.getCategorie().subscribe({
      next:(response)=>{
        this.allCategories=[...response];
       
        
      }
    })

  }

  //méthode qui s'applique lors de l'usage de la filterbar
    aLecouteDeLenfant(categorieEnvoiParents: number[]) {
    // Fonction appelée lorsqu'un utilisateur effectue une recherche.
    // console.log('categoryDeLenfant', categoryDeLenfant);
    this.categorieChecked = categorieEnvoiParents; //initisalise le filtre à appliquer
         console.log('categorie envoyé depuis enfant', this.categorieChecked);
    this.onUserInteractionFiltre(); //utilise le filtre
  }

  //méthode qui applique le filtre de categorieChecked
  onUserInteractionFiltre() {
    if(this.allCategories.length === this.categorieChecked.length || this.categorieChecked.length ===0){
    this.platsFilter = [...this.allPlats]; // Réinitialise les personnages affichés.
    } else {
      this.platsFilter = this.allPlats.filter((e)=> this.categorieChecked.includes(e.idcategorie))
    }
    // Fonction pour filtrer les personnages en fonction des univers sélectionnés et de la recherche.

console.log(this.platsFilter);


  }

  createImageFromBlob(image: Blob) {
      let reader =  new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.platImage= reader.result;
    });
  }




  getImageFromService() {
    this.isImageLoading = true;
    this.imagesService.getImage().subscribe({
      next: (data: Blob) => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      },
      error: (error) => {
        this.isImageLoading = false;
        console.log(error);
      },
    });
  }

}
