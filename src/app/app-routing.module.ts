import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContactComponent } from './contact/contact.component';
import { EditionGuard } from './services/guard/edition.guard';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"listeEtudiants", component:ListeEtudiantsComponent, children:[
    {path:"", component:AccueilComponent},
    {path:"etu", component: EtudiantComponent}
  ]},
  {path:"etudiant", component:EtudiantComponent},
  {path:"etudiant/:i", component:EtudiantComponent},
  {path:"etudiant/:nom/:i", component:EtudiantComponent},
  {path:"contact", component:ContactComponent},
  {path:"connexion", component:ConnexionComponent},
  {path:"edition", loadChildren: () => import('./edition/edition.module').then(e => e.EditionModule), canActivate:[EditionGuard], canLoad:[EditionGuard]},
  {path:"**", component:Erreur404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
