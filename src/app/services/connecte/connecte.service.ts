import { Injectable } from '@angular/core';

/**
  * Service de connexion
  */
@Injectable({
  providedIn: 'root'
})
export class ConnecteService {

  /**
    * Déclaration de la variable number à 0
    */
  statut:number = 0;
  /**
    * Déclaration de la variable connexion à false 
    */ 
  connexion:boolean = false;
  /**
    * Déclaration de la variable token à vide
    */
  token:string = "";
  /**
    * vide
    */
  constructor() { }
}
