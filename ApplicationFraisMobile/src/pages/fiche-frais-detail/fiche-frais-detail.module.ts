import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheFraisDetailPage } from './fiche-frais-detail';

@NgModule({
  declarations: [
    FicheFraisDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheFraisDetailPage),
  ],
})
export class FicheFraisDetailPageModule {}
