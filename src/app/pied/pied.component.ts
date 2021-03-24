import { Component, OnInit } from '@angular/core';

/**
  * Pied de page
  */
@Component({
  selector: 'app-pied',
  templateUrl: './pied.component.html',
  styleUrls: ['./pied.component.css']
})

export class PiedComponent implements OnInit {

  /**
    * Déclaration de la variable cpyright
    */
  copyright= "";

  /**
    * Menu déroulant fermé
    */
  navbarOpen = false;

  /**
    * Vide
    */
  constructor() { }

  /**
    * Ouvre et ferme le menu déroulant quand on clique
    */
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
  /**
    * La variable cpyright prend la valeur Romane
    */
  ngOnInit(): void {
    this.copyright = "Romane";
  }

}