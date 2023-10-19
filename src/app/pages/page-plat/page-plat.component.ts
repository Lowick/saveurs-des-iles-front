import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-page-plat',
  templateUrl: './page-plat.component.html',
  styleUrls: ['./page-plat.component.css']
})
export class PagePlatComponent {
  currentImage!:Blob;
  platToShow!:any;
  isImageLoading!: Boolean;

  constructor(
    private imagesService: ImagesService
  ){}

  async createImageFromBlob(image: Blob) {
      let reader = await new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      this.platToShow = reader.result;
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
