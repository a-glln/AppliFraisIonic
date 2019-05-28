import { FicheFraisProvider } from './../../providers/fiche-frais/fiche-frais';
import { FicheFrais } from './../../models/fichefrais';
import { FraisNonForfaitises } from './../../models/fraisnonforfaitises';
import { FraisForfaitises } from './../../models/fraisforfaitises';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the FicheFraisDetailPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-fiche-frais-detail',
  templateUrl: 'fiche-frais-detail.html',
})
export class FicheFraisDetailPage {

  fiche: FicheFrais;

  fraisForfaitises: Array<FraisForfaitises>;
  fraisNonForfaitises: Array<FraisNonForfaitises>;

  totalFraisForfaitises: number;
  totalFraisNonForfaitises: number;

  total: number;

  moisLibelle = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ficheFraisProvider: FicheFraisProvider) {
    let fiche = navParams.data['fiche'];
    this.fiche = fiche;
    ficheFraisProvider.getDetailById(fiche['id']).subscribe((datas) =>{
      this.fraisForfaitises = datas['detail_frais_forfait'] as Array<FraisForfaitises>;
      this.fraisNonForfaitises = datas['detail_frais_non_forfait'] as Array<FraisNonForfaitises>;
      
      this.totalFraisForfaitises = this.fraisForfaitises.length;
      this.totalFraisNonForfaitises = this.fraisNonForfaitises.length;

      this.total = datas['total'];
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FicheFraisDetailPage');
  }
  
}
