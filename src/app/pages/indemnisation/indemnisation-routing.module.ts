import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndemnisationPage } from './indemnisation.page';

const routes: Routes = [
  {
    path: '',
    component: IndemnisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndemnisationPageRoutingModule {}
