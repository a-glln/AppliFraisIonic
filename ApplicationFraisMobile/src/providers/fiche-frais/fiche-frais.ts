import { Api } from './../api/api';
import { User } from './../user/user';
import { FicheFrais } from './../../models/fichefrais';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
Generated class for the FicheFraisProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class FicheFraisProvider {
  
  constructor(public api: Api, public userService: User, public http: HttpClient) {
    console.log('Hello FicheFraisProvider Provider');
  }

  getAll(){
    return this.api.get('fiche_frais.php?utilisateur=' + this.userService.utilisateurId);
  }

  getAllUser() {
    return this.http.get('utilisateur.php');
  }

  
  getDetailById(id: string) {
    return this.api.get('detail.php?fiche_frais_id=' + id);
  }
}
