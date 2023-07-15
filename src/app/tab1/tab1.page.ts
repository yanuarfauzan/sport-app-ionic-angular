import { Component } from '@angular/core';
import { TheSportsDBService } from '../services/thesportsdb.service';
import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  item: any[] = [];

  teams: any[] = [];

  leagues: any[] = [];

  selectedOption: string = 'English Premier League';

  constructor(private theSportsDBService: TheSportsDBService, private navCtrl: NavController) { }

  ngOnInit() {
    this.fetchDataTeam();
  }

  fetchDataTeam() {
    this.theSportsDBService.getTeams().subscribe((data: any) => {
      this.teams = data.teams;
      console.log(data);

    });

  }

  openDetail(idTeam: number) {
    this.navCtrl.navigateForward('/detail/' + idTeam);
    console.log(idTeam);
  }


}
