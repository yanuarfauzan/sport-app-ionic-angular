import { Component } from '@angular/core';
import { TheSportsDBService } from '../services/thesportsdb.service';
import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


interface Team {
  idTeam: number;
  idSoccerXML: string;
  idAPIfootball: string;
  intLoved: string | null;
  strTeam: string;
  strDescriptionEN: string;
  intFormedYear: number;
  strAlternate: string;
  strTeamBadge: string;
  strCountry: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  teams: any[] = [];
  selectedCountry: string = 'indonesia';
  countries: any[] = [];
  filteredTeams: Team[] = [];

  constructor(private TheSportsDBService: TheSportsDBService, private navCtrl: NavController) { }


  ngOnInit() {
    this.onSearchTeamByCountry();
    this.fetchDataCountry();
  }

  onSearchTeamByCountry() {
    this.TheSportsDBService.getTeamsByCountry(this.selectedCountry).subscribe((data: any) => {
      this.teams = data.teams;
      this.filteredTeams = this.teams;
      console.log(data);
      // Lakukan pemrosesan data sesuai kebutuhan Anda
    });

  }

  fetchDataCountry() {
    this.TheSportsDBService.getCountry().subscribe((data: any) => {
      this.countries = data.countries;
      console.log(data);
    })
  }

  openDetailTeam(idTeam: number) {
    this.navCtrl.navigateForward('/detailTeamByCountry/' + idTeam + '/' + this.selectedCountry);
    console.log(idTeam);
  }

  filterTeams(searchTerm: string) {
    if (searchTerm === '') {
      this.filteredTeams = this.teams;
    } else {
      this.filteredTeams = this.teams.filter(team =>
        team.strTeam.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
