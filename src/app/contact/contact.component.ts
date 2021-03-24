import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
  * Page du formulaire de contact
  */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /**
    * Déclaration de la variable contact
    */
  contact:any;

  /**
    * vide
    */
  constructor() { }

  /**
    * Initialise la variable contact
    */
  ngOnInit(): void {
    this.contact = {
      nom: 'Anonyme',
      email: '',
      sujet: 'Information',
      message: '',
    }
  }

  /**
    * Affichage des modifications de valeurs du Input nom en temps réél
    */
  suiviInput(){
    console.log(this.contact);
  }

  /**
    * Affichage des données du formulaire 
    * @param {NgForm} f les données du formulaire 
    */
  soumissionFormulaire(f:NgForm){
    console.log("Formulaire envoyé");
    console.log("Données envoyées", f);
    console.log("Comparaison des données", f.value, this.contact);
  }
}
