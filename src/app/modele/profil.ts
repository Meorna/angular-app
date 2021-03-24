/**
  * Interface d'un profil etudiant
  */
export interface ProfilI {
    _id?:any;
    nom:string;
    prenom:string;
    specialites:Array<string>;
    promo:string;
    mail?:string;
    age:number;
    photo?:string;
    statut?:number;
    token?:string;
}

/**
  * Classe d'un profil etudiant iplémentant l'interface ProfilI
  */
export class Profil implements ProfilI {
  _id = 0;
  nom = "";
  prenom = "";
  specialites = [];
  promo = "";
  mail = "";
  age = 0;
  photo = "";
  statut = 0;
}