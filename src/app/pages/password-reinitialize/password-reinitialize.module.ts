import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordReinitializePageRoutingModule } from './password-reinitialize-routing.module';

import { PasswordReinitializePage } from './password-reinitialize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordReinitializePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PasswordReinitializePage]
})
export class PasswordReinitializePageModule {}
