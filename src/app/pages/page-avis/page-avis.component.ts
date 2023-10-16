import { Component } from '@angular/core';
import { Avis } from 'src/app/models/avis';
import { AvisData } from 'src/app/models/avis-data';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-page-avis',
  templateUrl: './page-avis.component.html',
  styleUrls: ['./page-avis.component.css']
})
export class PageAvisComponent {

  // avis!:string;
  // tabAvis: string[]=[];
  tabAvisPseudo : Avis[] =[];

  constructor(
    private avisService:AvisService
  ){}

  ngOnInit():void{

    this.avisService.getAllAvis().subscribe(
  (data) => {
    console.log(data);
    this.tabAvisPseudo = data;
   

 }
);


  }

  
}
