import { Enseignant } from "./Enseignant";
import { Groupe } from "./Groupe";

export class Seance{

    id:string ="";
    Date:Date | undefined;
    HeurDebut:string ="";
    Duree:number=0;
    Matier:string ="";
    Enseignant:string="";
    Salle:string ="";
    Group: Groupe = new Groupe;
    constructor()
    {}
}