import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordReinitializePage } from './password-reinitialize.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordReinitializePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordReinitializePageRoutingModule {}
