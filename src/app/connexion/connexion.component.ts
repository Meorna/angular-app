import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

/**
  * Page de connexion component
  */
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  /**
    * Déclaration de la variable utilisateur contenant un id et un mdp vide
    */
  utilisateur:any = {id:'', mdp:''};

  /**
    * Constructeur
    * @param {AuthService} authServ le service d'accès aux données des fichiers d'authentification
    */
  constructor(private authServ:AuthService) { }

  /**
    * Soumission des données du formulaire à AuthService
    */
  soumissionFormulaire() {
    this.authServ.utilisateur(this.utilisateur);
  }

  /**
    * vide
    */
  ngOnInit(): void {
  }

}
