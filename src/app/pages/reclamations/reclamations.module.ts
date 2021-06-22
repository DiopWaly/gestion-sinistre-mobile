import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamationsPageRoutingModule } from './reclamations-routing.module';

import { ReclamationsPage } from './reclamations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamationsPageRoutingModule
  ],
  declarations: [ReclamationsPage]
})
export class ReclamationsPageModule {}
