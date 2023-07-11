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
  strTeamBanner: string;
  strFacebook: string;
  strInstagram: string;
  strTwitter: string;
  strYoutube: string;
  strWebsite: string;
  // Tambahkan properti lain sesuai kebutuhan
}

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.page.html',
  styleUrls: ['./detail-team.page.scss'],
})
export class DetailTeamPage implements OnInit {
  team: Team | null = null;

  private apiKey: string = environment.apiKey;
  private baseUrl: string = 'https://www.thesportsdb.com/api/v1/json/3/';

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const idTeam = params.get('id');
          if (idTeam === null) {
            return new Observable<Team | null>((subscriber) => {
              subscriber.next(null);
              subscriber.complete();
            });
          }
          return this.getTeamById(idTeam);
        })
      )
      .subscribe((team) => {
        this.team = team;
      });
  }

  getTeamById(id: string): Observable<Team | null> {
    const url = `${this.baseUrl}search_all_teams.php?l=English%20Premier%20League`;
    return this.http.get<{ teams: Team[] }>(url).pipe(
      map((response) => {
        const teams = response.teams;
        return teams.find((team) => team.idTeam === id) || null;
      })
    );
  }

  goBack() {
    this.navCtrl.back();
  }
}
