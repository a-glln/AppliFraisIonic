import { FicheFraisPage } from './../fiche-frais/fiche-frais';
import { Utilisateur } from './../../models/utilisateur';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AdminPage } from './../admin/admin';
import { TabsPage } from './../tabs/tabs';


import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  utilisateur = new Utilisateur();

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
      
  }

  doLogin() {
    this.user.login(this.utilisateur).subscribe((resp) => {

      if (this.utilisateur.nomUtilisateur == "admin" && this.utilisateur.motDePasse=="admin") {
        this.navCtrl.push('AdminPage');
      }
  
      else if (this.utilisateur.role_id = 1) {
        this.user.utilisateurId = resp['utilisateur_id'];
        this.user.nom = resp['nom'];
        this.user.prenom = resp['prenom'];
        this.user.nomUtilisateur = resp['nom_utilisateur'];
        this.user.role_id = resp['role_id'];
          this.navCtrl.push('TabsPage');
      } 
    
    
      else {
        let toast = this.toastCtrl.create({
          message: 'Identifiants incorrects',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: 'Une erreur est survenue',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }
}
