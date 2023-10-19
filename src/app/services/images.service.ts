import { Injectable } from '@angular/core';
import { Images } from '../models/images';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
images:Images[] = [];

  constructor(private http:HttpClient) {}

  getImage(){
    return this.http.get('http://localhost:3000/api/image',{
      responseType:'blob',
    });
  }

  getImageById(id:number){
    return this.http.get(`http:localhost:3000/api/image/${id}`,{
      responseType:'blob',})
  }

  postImage(formData: FormData){
    return this.http.post(`http://localhost:3000/api/image`,formData);
  }
}
