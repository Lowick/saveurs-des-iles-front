import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {

  @Input()allCategories!:Categorie[]; //tableau des catégories reçu depuis la BDD
  categoriesToDisplay:number[] = [] //tableau des id catégorie à envoyer au parent 
  @Output() categorieEnvoiParents = new EventEmitter<number[]>(); //evènement qui permet d'envoyer categorieToDisplay au parent

// La classe FilterBarComponent est un composant Angular qui gère la barre de filtre.
   onCheckCategory(e: any){
    // Cette fonction est appelée lorsqu'une case à cocher est modifiée.
    const target = e.target as HTMLInputElement; // On récupère l'élément HTML qui a déclenché l'événement.
     console.log("valeur de la checkbox: ", target.value);

     //au check, rempli le tableau des id categorie
    if(target.checked){
      //comparer les deux tableaux
      if(this.allCategories.length === this.categoriesToDisplay.length){
        this.categoriesToDisplay = [];
        this.categoriesToDisplay.push(+target.value)
      }else{
        this.categoriesToDisplay.push(+target.value)
      }
    } else{
      //vérifie si l'id est déjà dans le tableau
      if(this.categoriesToDisplay.includes(+target.value)){
        this.categoriesToDisplay=this.categoriesToDisplay.filter(
          (categorie_id) =>categorie_id !== +target.value //filtre le tableau des id categorie en excluant l'id checké
        )
      }else{
        this.categoriesToDisplay.push(+target.value)
      }
    }
 console.log("tableau de id coché ?: ", this.categoriesToDisplay);

 this.categorieEnvoiParents.emit(this.categoriesToDisplay) //permet d'envoyer l'info au parent
  }
}
