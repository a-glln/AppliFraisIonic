import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheFraisPage } from './fiche-frais';

@NgModule({
  declarations: [
    FicheFraisPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheFraisPage),
  ],
})
export class FicheFraisPageModule {}
