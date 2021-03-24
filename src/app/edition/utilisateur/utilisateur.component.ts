import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profil, ProfilI } from 'src/app/modele/profil';
import { UtilisateursService } from '../services/utilisateurs/utilisateurs.service';

/**
  * Page d'édition d'un utilisateur
  */
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
 
   /**
     * Déclaration d'un utilisateur
     */
   utilisateur: ProfilI = new Profil();
 
   /**
     * Constructeur
     * @param {UtilisateursService} servUti le service d'accès aux données des utilisateurs
     */
   constructor(public servUti:UtilisateursService) {
   }
 
   /**
     * Affichage des données du formulaire d'édition
     * @param {NgForm} f les données du formulaire 
     */
   soumissionFormulaire(f:NgForm){
     this.onSave(this.servUti.utilisateur, this.utilisateur);
     console.log("Formulaire envoyé");
     console.log("Données envoyées", f);
   }
 
   /**
     * Sauvegarder la modification d'un utilisateur
     */
   onSave(utilisateur :ProfilI, tmpUtilisateur :ProfilI) {
     utilisateur.nom = tmpUtilisateur.nom;
     utilisateur.prenom = tmpUtilisateur.prenom;
     utilisateur.mail = tmpUtilisateur.mail;
     utilisateur.promo = tmpUtilisateur.promo;
     utilisateur.specialites = tmpUtilisateur.specialites; 
     utilisateur.age = tmpUtilisateur.age;
   }
 
   /**
     * Récupérer l'étudiant séléctionné en fonction de son index
     */
   ngOnInit(): void {
     this.onSave(this.utilisateur, this.servUti.utilisateur);
   }

}
