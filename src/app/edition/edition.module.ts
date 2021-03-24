import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { EditionRoutingModule} from './edition-routing.module';
import { FormsModule } from '@angular/forms';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EtudiantPipe } from './pipes/etudiant.pipe';



@NgModule({
  declarations: [AccueilComponent, EtudiantComponent, UtilisateurComponent, ListeEtudiantsComponent, EtudiantPipe],
  imports: [
    CommonModule,
    EditionRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class EditionModule { }
