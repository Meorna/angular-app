import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnecteService } from '../connecte/connecte.service';

/**
  * Vérifier si l'utilisateur peut accéder à la partie edition de l'application
  */
@Injectable({
  providedIn: 'root'
})
export class EditionGuard implements CanActivate, CanLoad {
  /**
    * Constructeur
    * @param {ConnecteService} connecteServ le service de connexion
    */
  constructor(private connecteServ:ConnecteService){}

  /**
    * Autoriser des liens de routerlink
    */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.connecteServ.connexion;
  }

  /**
    * Autoriser le chargement en lazy loading
    */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.connecteServ.statut > 0;
  }
}
