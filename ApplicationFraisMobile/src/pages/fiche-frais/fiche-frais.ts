import { FicheFraisProvider } from './../../providers/fiche-frais/fiche-frais';
import { FicheFrais } from './../../models/fichefrais';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../providers';

/**
* Generated class for the FicheFraisPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-fiche-frais',
  templateUrl: 'fiche-frais.html',
})
export class FicheFraisPage {

  moisLibelle = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  
  ficheFrais: Array<FicheFrais>;
  total: number;
  nom: string;
  prenom: string;


  
  constructor(public navCtrl: NavController, public userService: User, public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public ficheFraisProvider: FicheFraisProvider) {

    this.nom = userService.nom;
    this.prenom = userService.prenom;

      ficheFraisProvider.getAll().subscribe((datas) =>{
        this.ficheFrais = datas['fiches_frais'] as Array<FicheFrais>;
        this.total = this.ficheFrais.length;
      });
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad FicheFraisPage');
    }
    
    refresh() {
      this.ficheFraisProvider.getAll().subscribe((datas) =>{
        this.ficheFrais = datas['fiches_frais'] as Array<FicheFrais>;
        this.total = this.ficheFrais.length;
      });
    }
    
    goToDetail(fiche){
      this.navCtrl.push('FicheFraisDetailPage', { fiche: fiche });
    }
  }
