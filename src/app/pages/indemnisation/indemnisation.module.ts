import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndemnisationPageRoutingModule } from './indemnisation-routing.module';

import { IndemnisationPage } from './indemnisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndemnisationPageRoutingModule
  ],
  declarations: [IndemnisationPage]
})
export class IndemnisationPageModule {}
