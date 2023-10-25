import { Utilisateur } from "./utilisateur";

export interface AvisData {
    pseudo:string;
    avis:string;
    idutilisateur:number;
    utilisateur?:Utilisateur;
}
