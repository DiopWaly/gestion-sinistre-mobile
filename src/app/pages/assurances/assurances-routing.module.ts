import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssurancesPage } from './assurances.page';

const routes: Routes = [
  {
    path: '',
    component: AssurancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssurancesPageRoutingModule {}
