import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil, ProfilI } from 'src/app/modele/profil';

/**
  * Service liant angular avec le fichier etudiants.json
  */
@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  /**
    * Déclaration du tableau d'étudiant
    */
  listeEtudiants: Array<ProfilI> = [];

  /**
    * Récupère les données du fichier json
    */
  getEtudiantsFromBack(){
    this.http.get<Array<Profil>>("/assets/data/etudiants.json").subscribe(
      data => {
        console.log(data);
        this.listeEtudiants = data;
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
    this.getEtudiantsFromBack();
  }
}
