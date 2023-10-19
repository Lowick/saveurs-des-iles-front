import { Categorie } from "./categorie";
import { Images } from "./images";


export interface CreatePlatResponse {
    nom:string;
    categorie:Categorie;
    image:Images;

}
