import { Component, OnInit } from '@angular/core';

/**
  * Menu
  */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
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
    * Vide
    */
  ngOnInit(): void {
  }

}
