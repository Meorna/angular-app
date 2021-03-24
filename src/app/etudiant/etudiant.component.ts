import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from '../services/etudiants/etudiants.service';
import { Profil, ProfilI } from '../modele/profil';

/**
  * Page d'un étudiant
  */
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  /**
    * Déclaration de l'index étudiant à -1
    */
  indexEtudiant: number = -1;
  /**
    * Déclaration d'un étudiant à partir du modèle ProfilI
    */
  etudiant: ProfilI = <ProfilI>{};

  /**
    * Constructeur
    * @param {EtudiantsService} servEtu le service d'accès aux données du fichier etudiants.json
    * @param {ActivatedRoute} routeParametres le service d'accès aux routes
    */
  constructor(public servEtu:EtudiantsService, private routeParametres:ActivatedRoute) { }

  /**
    * Récupérer l'étudiant séléctionné en fonction de son index présent dans la route
    */
  ngOnInit(): void {
    console.log(this.routeParametres);
    this.routeParametres.params.subscribe(
      parametres => {
        console.log("Paramètres de la route", parametres);
        if(parametres['i']){
          this.indexEtudiant = + parametres['i'];
        }
      }
    )
  }
}
