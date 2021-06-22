import { PasswordReinitializePageModule } from './../pages/password-reinitialize/password-reinitialize.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    // tabs
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'assurances',
        loadChildren: () => import('../pages/assurances/assurances.module').then( m => m.AssurancesPageModule)
      },
      {
        path: 'reclamations',
        loadChildren: () => import('../pages/reclamations/reclamations.module').then( m => m.ReclamationsPageModule)
      },
      {
        path: 'indemnisation',
        loadChildren: () => import('../pages/indemnisation/indemnisation.module').then( m => m.IndemnisationPageModule)
      },
      {
        path: 'mon-profil',
        loadChildren: () => import('../pages/mon-profil/mon-profil.module').then( m => m.MonProfilPageModule)
      },
      {
        path: 'declaration-sinistre',
        loadChildren: () => import('../pages/declaration-sinistre/declaration-sinistre.module').then( m => m.DeclarationSinistrePageModule)
      },
      {
        path: 'new-compte',
        loadChildren: () => import('../pages/new-compte/new-compte.module').then( m => m.NewComptePageModule)
      },
      {
        path: 'pwd-reinitialize',
        // eslint-disable-next-line max-len
        loadChildren: () => import('../pages/password-reinitialize/password-reinitialize.module').then( m => m.PasswordReinitializePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
