import { User } from './../../providers/user/user';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  nom: string;
  prenom: string;
  nomUtilisateur: string;

  constructor(public navCtrl: NavController, public userService: User) {
    this.nom = userService.nom;
    this.prenom = userService.prenom;
    this.nomUtilisateur = userService.nomUtilisateur;
  }

  ionViewDidLoad() {
  }

  deconnexion() {
    this.userService.logout();
    this.navCtrl.setRoot('LoginPage');
  }
}
