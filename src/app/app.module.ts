import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PiedComponent } from './pied/pied.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { EtudiantsService } from './services/etudiants/etudiants.service';
import { AuthInterceptor } from './services/interceptor/auth/auth.interceptor';
import { Erreur401Interceptor } from './services/interceptor/erreur401/erreur401.interceptor';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EtudiantPipe } from './pipes/etudiant.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    PiedComponent,
    EtudiantComponent,
    ListeEtudiantsComponent,
    Erreur404Component,
    ContactComponent,
    ConnexionComponent,
    EtudiantPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [EtudiantsService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}, {provide: HTTP_INTERCEPTORS, useClass: Erreur401Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
