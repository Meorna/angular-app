import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants/etudiants.service';
import { CommonModule } from '@angular/common';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

/**
  * Page de la liste des étudiants
  */
@Component({
  selector: 'app-liste-etudiants',
  templateUrl: './liste-etudiants.component.html',
  styleUrls: ['./liste-etudiants.component.css']
})
export class ListeEtudiantsComponent implements OnInit {

  
  /**
    * Déclaration de l'icone pour le bouton gauche de la pagination
    */
  faArrowCircleLeft = faArrowCircleLeft;
  /**
    * Déclaration de l'icone pour le bouton droit de la pagination
    */
  faArrowCircleRight = faArrowCircleRight;
  /**
    * Déclaration de la variable pagination contenant un min et un max
    */
  pagination = {min:0, max: 6};
  /**
    * Déclaration de la variable tri à vide
    */
  tri: string = "";

  /**
    * Constructeur
    * @param {EtudiantsService} servEtu le service d'accès aux données du fichier etudiants.json
    */
  constructor(public servEtu:EtudiantsService) { }

  /**
    * Gestion de la pagination
    * @param {number} n le nombre de décallage de carte étudiants affiché
    */
  setPagination(n:number){
    if((n < 0 && this.pagination.min > 0) || (n > 0 && this.pagination.max < this.servEtu.listeEtudiants.length ) ) {
      this.pagination.min += n;
      this.pagination.max += n;
    }   
  }

  /**
    * Vide
    */
  ngOnInit(): void {
  }

}
