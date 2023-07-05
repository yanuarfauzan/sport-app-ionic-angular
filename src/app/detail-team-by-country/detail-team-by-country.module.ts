import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTeamByCountryPageRoutingModule } from './detail-team-by-country-routing.module';

import { DetailTeamByCountryPage } from './detail-team-by-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTeamByCountryPageRoutingModule
  ],
  declarations: [DetailTeamByCountryPage]
})
export class DetailTeamByCountryPageModule {}
