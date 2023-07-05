import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, map } from 'rxjs/operators';

interface Team {
  idTeam: string;
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
  selector: 'app-detail-team-by-country',
  templateUrl: './detail-team-by-country.page.html',
  styleUrls: ['./detail-team-by-country.page.scss'],
})
export class DetailTeamByCountryPage implements OnInit {

  teams: Team[] = [];
  team: Team | null = null;

  country: string = '';


  private apiKey: string = environment.apiKey;
  private baseUrl: string = 'https://www.thesportsdb.com/api/v1/json/';

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private http: HttpClient) { }

  ngOnInit() {
    const country = this.route.snapshot.paramMap.get('country');
    this.country = country !== null ? country : '';
    this.route.paramMap.pipe(
      switchMap(params => {
        const idTeam = params.get('id');
        if (idTeam === null) {
          return new Observable<Team | null>(subscriber => {
            subscriber.next(null);
            subscriber.complete();
          });
        }
        return this.getTeams().pipe(
          map(teams => this.filterTeamById(teams, idTeam))
        );
      })
    ).subscribe(team => {
      this.team = team;
    });
  }

  getTeams(): Observable<Team[]> {
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?s=Soccer&c=${this.country}`;
    return this.http.get<{ teams: Team[] }>(url).pipe(
      map(response => response.teams)
    );
  }

  filterTeamById(teams: Team[] | null, teamId: string): Team | null {
    if (teams === null) {
      return null;
    }
    return teams.find(team => team.idTeam === teamId) || null;
  }

  goBack() {
    this.navCtrl.back();
  }

}
