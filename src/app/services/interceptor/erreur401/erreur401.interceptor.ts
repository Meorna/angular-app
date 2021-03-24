import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { ConnecteService } from '../../connecte/connecte.service';

/**
  * Intercepteur de l'erreur 401
  */
@Injectable()
export class Erreur401Interceptor implements HttpInterceptor {

  /**
   * Constructeur
   * @param {ConnecteService} connecteServ le service de connexion
   */
  constructor(private connecteServ:ConnecteService, private route:Router) {}

  /**
   * Intercept l'erreur 401 et déconnecte l'utilisateur
   * @param {HttpRequest} request 
   * @param {HttpHandler} next 
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError(
        (erreur) => {
          if(erreur instanceof HttpErrorResponse && erreur.status == 401){
            this.connecteServ.statut = 0;
            this.connecteServ.connexion = false;
            this.connecteServ.token = "";
            this.route.navigateByUrl('/connexion');
          };
          return erreur;
        } 
      )) as any;
  }
}
