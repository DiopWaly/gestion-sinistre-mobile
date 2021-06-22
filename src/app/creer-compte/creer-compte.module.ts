import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerComptePageRoutingModule } from './creer-compte-routing.module';

import { CreerComptePage } from './creer-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerComptePageRoutingModule
  ],
  declarations: [CreerComptePage]
})
export class CreerComptePageModule {}
