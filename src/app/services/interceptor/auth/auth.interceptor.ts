import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnecteService } from '../../connecte/connecte.service';

/**
  * Intercepteur de l'authentification
  */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
    * Déclaration de la variable entetes
    */
  entetes:any;

  /**
    * Constructeur
    * @param {ConnecteService} connecteServ le service de connexion
    */
  constructor(private connecteServ:ConnecteService) {}

  /**
   * Intercept la connexion sinon déconnecte l'utilisateur, et envoie un header avec autorisation
   * @param {HttpRequest} request
   * @param {HttpHandler} next 
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Interception d'une requete...");
    if(this.connecteServ.token){
      this.entetes = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.connecteServ.token
        })
      }
    }
    else {
      this.entetes = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    }
    // Clonage de la requête initiale et injection d'un nouveau en-tête
    const authReq = request.clone(this.entetes);

    console.log("La requete va etre envoyé avec un nouveau header intégrant une authorisation..")
    // Envoyer le nouvelle requête
    return next.handle(authReq).pipe(
      catchError((erreur) => {
        console.log("Une erreur s'est produite.");
        // Afficher les erreurs
        console.log(erreur);
        return erreur;
        //return Observable.throw(erreur);

      }))as any;
  }
}
