import { Pipe, PipeTransform } from '@angular/core';

/**
  * Pipe filtre étudiant
  */
 @Pipe({
  name: 'etuPipe'
})
export class EtudiantPipe implements PipeTransform {
  /**
   * Filtre la liste des étudiants
   * @param {Array<any>} etudiants la liste des étudiants
   * @param {string} filtre le filtre
   * @return la liste des étudiants filtrées
   */
  transform(etudiants: Array<any>, filtre: string): Array<any> {
    if(!etudiants) 
      return [];
    if(!filtre) 
      return etudiants;
    return etudiants.filter(e => e.nom.toLowerCase().indexOf(filtre.toLowerCase()) > -1);
  }
}
