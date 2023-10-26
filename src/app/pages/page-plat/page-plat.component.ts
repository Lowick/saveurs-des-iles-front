import { Component } from '@angular/core';
import { Plat } from 'src/app/models/plat';
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
  platList!:Plat[]

  constructor(
    private platService: PlatService,
    private imagesService: ImagesService
  ){}

  ngOnInit(){
    this.platService.getAllPlat().subscribe({
      next:(response)=>{
        this.platList=response;
      }
    })
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
