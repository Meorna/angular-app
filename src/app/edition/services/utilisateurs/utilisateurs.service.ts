import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil, ProfilI } from 'src/app/modele/profil';

/**
  * Service d'un utilisateur
  */
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  /**
    * Déclaration d'un utilisateur
    */
   utilisateur: ProfilI = new Profil();

   /**
     * Récupère les données du fichier json
     */
   getUtilisateursFromBack(){
     this.http.get<Profil>("/assets/ids/sallio@1234.json").subscribe(
       data => {
         console.log(data);
         this.utilisateur = data;
       },
       (error) => {
         console.log('Erreur ! : ' + error);
       }
     )
   }
 
   /**
     * Récupère les données
     * @param {HttpClient} http permet de faire des requêtes http
     */
   constructor(private http:HttpClient) {
     this.getUtilisateursFromBack();
   }
}
