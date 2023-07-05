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

  // Tambahkan properti lain sesuai kebutuhan
}

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.page.html',
  styleUrls: ['./detail-team.page.scss'],
})
export class DetailTeamPage implements OnInit {

  teams: Team[] = [];
  team: Team | null = null;

  league: string = '';


  private apiKey: string = environment.apiKey;
  private baseUrl: string = 'https://www.thesportsdb.com/api/v1/json/';

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private http: HttpClient) { }

  ngOnInit() {
    const league = this.route.snapshot.paramMap.get('league');
    this.league = league !== null ? league : '';
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
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?l=${this.league}`;
    return this.http.get<{ teams: Team[] }>(url).pipe(
      map(response => response.teams)
    );
  }

  filterTeamById(teams: Team[], teamId: string): Team | null {
    return teams.find(team => team.idTeam === teamId) || null;
  }

  goBack() {
    this.navCtrl.back();
  }
}
