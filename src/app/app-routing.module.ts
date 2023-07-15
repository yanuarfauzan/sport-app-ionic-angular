import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailTeamPage } from './detail-team/detail-team.page';
import { Tab4Page } from './tab4/tab4.page';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail-team',
    loadChildren: () => import('./detail-team/detail-team.module').then(m => m.DetailTeamPageModule)
  },
  { path: 'detail/:id', component: DetailTeamPage },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
