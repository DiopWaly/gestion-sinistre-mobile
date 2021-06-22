import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamationsPage } from './reclamations.page';

const routes: Routes = [
  {
    path: '',
    component: ReclamationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamationsPageRoutingModule {}
