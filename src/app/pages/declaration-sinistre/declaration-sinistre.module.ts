import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclarationSinistrePageRoutingModule } from './declaration-sinistre-routing.module';

import { DeclarationSinistrePage } from './declaration-sinistre.page';
import { CalendarModule } from 'ion2-calendar';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclarationSinistrePageRoutingModule,
    CalendarModule,
    AgmCoreModule
  ],
  declarations: [DeclarationSinistrePage]
})
export class DeclarationSinistrePageModule {}
