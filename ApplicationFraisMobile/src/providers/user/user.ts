import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Utilisateur } from '../../models/utilisateur';

@Injectable()
export class User {
  utilisateurId: number;
  nom: string;
  prenom: string;
  nomUtilisateur: string;
  role_id: number;

  constructor(public api: Api) { }

  login(utilisateur: Utilisateur) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('nom_utilisateur', utilisateur.nomUtilisateur);
    httpParams = httpParams.append('mot_de_passe', utilisateur.motDePasse);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    return this.api.post('connexion.php', httpParams, options);
  }

  logout() {
    this.utilisateurId = null;
    this.nom = null;
    this.prenom = null;
    this.nomUtilisateur = null;
    this.role_id = null;
  }
}
