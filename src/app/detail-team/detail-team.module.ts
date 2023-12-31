import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailTeamPageRoutingModule } from './detail-team-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { DetailTeamPage } from './detail-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTeamPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [DetailTeamPage],
})
export class DetailTeamPageModule { }
