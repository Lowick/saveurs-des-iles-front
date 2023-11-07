import { Component, Input } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-delete-plat',
  templateUrl: './delete-plat.component.html',
  styleUrls: ['./delete-plat.component.css']
})
export class DeletePlatComponent {
  @Input() plats: Plat[]=[];

  constructor(
    private platService: PlatService
  ){}

  ngOnInit():void{
    this.platService.getAllPlat().subscribe((data:Plat[])=> {
      this.plats = data;
    });
  }

   delete(plat: Plat) {
    if(!plat.id){
      return;
    } else{

    }
    
    const confirmDelete = confirm(
      'Etes- vous sûr de vouloir supprimer ce plat?'
    );
    if(!confirmDelete){
      return;
    }
    this.platService.deletePlat(plat.id).subscribe((response)=>{
      console.log('le plat a bien été supprimé.' + response);
    });
    alert('Votre plat a bien été supprimé.')
    
}

}
