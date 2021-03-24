import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profil, ProfilI } from 'src/app/modele/profil';
import { EtudiantsService } from '../../services/etudiants/etudiants.service';

/**
  * Page d'édition d'un étudiant
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
  etudiant: ProfilI = new Profil();
  
  /**
    * Constructeur
    * @param {EtudiantsService} servEtu le service d'accès aux données du fichier etudiants.json
    * @param {ActivatedRoute} routeParametres le service d'accès aux routes
    */
   constructor(public servEtu:EtudiantsService, private routeParametres:ActivatedRoute) { }

  /**
    * Affichage des données du formulaire d'édition
    * @param {NgForm} f les données du formulaire 
    */
   soumissionFormulaire(f:NgForm){
    this.onSave(this.servEtu.listeEtudiants[this.indexEtudiant], this.etudiant);
    console.log("Formulaire envoyé");
    console.log("Données envoyées", f);
    console.log("Comparaison des données", f.value);
  }

  /**
    * Sauvegarder la modification d'un utilisateur
    */
  onSave(etudiant :ProfilI, tmpEtudiant :ProfilI) {
    etudiant.nom = tmpEtudiant.nom;
    etudiant.prenom = tmpEtudiant.prenom;
    etudiant.mail = tmpEtudiant.mail;
    etudiant.promo = tmpEtudiant.promo;
    etudiant.specialites = tmpEtudiant.specialites; 
    etudiant.age = tmpEtudiant.age;
  }

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
    this.onSave(this.etudiant, this.servEtu.listeEtudiants[this.indexEtudiant]);
  }

}

