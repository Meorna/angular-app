var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"AccueilComponent"},{"path":"listeEtudiants","component":"ListeEtudiantsComponent","children":[{"path":"","component":"AccueilComponent"},{"path":"etu","component":"EtudiantComponent"}]},{"path":"etudiant","component":"EtudiantComponent"},{"path":"etudiant/:i","component":"EtudiantComponent"},{"path":"etudiant/:nom/:i","component":"EtudiantComponent"},{"path":"contact","component":"ContactComponent"},{"path":"connexion","component":"ConnexionComponent"},{"path":"edition","loadChildren":"./edition/edition.module#EditionModule","canActivate":["EditionGuard"],"canLoad":["EditionGuard"],"children":[{"kind":"module","children":[],"module":"EditionModule"}]},{"path":"**","component":"Erreur404Component"}],"kind":"module"}]}