import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilI } from 'src/app/modele/profil';
import { ConnecteService } from '../connecte/connecte.service';

/**
  * Déclaration du service d'authentification
  */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
    * Déclaration de la variable profil à vide
    */
  profil: ProfilI = <ProfilI>{};

  /**
    * Constructeur
    * @param {HttpClient} http permet de faire des requêtes http
    * @param {ConnecteService} connecteServ le service de connexion
    */
  constructor(private http:HttpClient, public connecteServ:ConnecteService) {}

  /**
    * Récupère un utilisateur depuis le dossier data/ids/
    * @param {{id:any, mdp:string}} connexion id et mdp pour la connexion
    */
  utilisateur(connexion:{id:any, mdp:string}){
    this.http.get<ProfilI>('/assets/ids/' + connexion.id +'@' + connexion.mdp + '.json').subscribe(
      data => {
        console.log(data);
        this.connecteServ.connexion = true;
        if(data['statut']) this.connecteServ.statut = data['statut'];
        if(data['token']) this.connecteServ.token = data['token'];
        this.profil = data;
      },
      erreur => {
        console.log(erreur);
        this.connecteServ.connexion = false;
        this.connecteServ.statut = 0;
        this.profil = <ProfilI>{};
      }
    )
  }
}
