import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs/utilisateurs.service';

/**
  * Accueil de l'édition
  */
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  /**
    * Menu déroulant fermé
    */
   navbarOpen = false;

   /**
     * Constructeur
     * @param {UtilisateursService} servUti le service d'accès aux données des utilisateurs
     */
   constructor(public servUti:UtilisateursService) { }
 
   /**
     * Ouvre et ferme le menu déroulant quand on clique
     */
   toggleNavbar() {
     this.navbarOpen = !this.navbarOpen;
   }
   
   /**
     * Vide
     */
   ngOnInit(): void {
   }

}
