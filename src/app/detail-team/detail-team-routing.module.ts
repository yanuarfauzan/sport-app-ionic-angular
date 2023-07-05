import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTeamPage } from './detail-team.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTeamPageRoutingModule {}
