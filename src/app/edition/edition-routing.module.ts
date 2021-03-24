import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


const routes = [
  {path: '', component:AccueilComponent, children :[
    {path:"listeEtudiants", component:ListeEtudiantsComponent, children:[
      {path:"", component:AccueilComponent},
      {path:"etu", component: EtudiantComponent}
    ]},
    {path:"etudiant/:i", component:EtudiantComponent},
    {path:'utilisateur', component:UtilisateurComponent}
  ]}
]

@NgModule({  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class EditionRoutingModule { }
