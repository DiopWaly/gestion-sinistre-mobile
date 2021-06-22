import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssurancesPageRoutingModule } from './assurances-routing.module';

import { AssurancesPage } from './assurances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssurancesPageRoutingModule
  ],
  declarations: [AssurancesPage]
})
export class AssurancesPageModule {}
