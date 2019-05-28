import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utilisateur } from '../../models/utilisateur';
import { FicheFraisProvider } from '../../providers/fiche-frais/fiche-frais';


/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  utilisateur: Array<Utilisateur>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public ficheFraisProvider: FicheFraisProvider) {

    ficheFraisProvider.getAllUser().subscribe(
      (datas) => {
        this.utilisateur = datas as Array<Utilisateur>;
        debugger;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
