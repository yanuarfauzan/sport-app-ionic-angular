import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TheSportsDBService {
  private apiKey: string = environment.apiKey;
  private baseUrl: string = 'https://www.thesportsdb.com/api/v1/json/';


  constructor(private http: HttpClient) { }

  getLeagues() {
    const url = `${this.baseUrl}${this.apiKey}/all_leagues.php`;
    return this.http.get(url);
  }

  getTeams() {
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?l=English%20Premier%20League`;
    return this.http.get(url);
  }

  getTeamByLeague(strLeague: string) {
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?l=${strLeague}`;
    return this.http.get(url);
  }

  getTeamsByCountry(strCountry: string) {
    const url = `${this.baseUrl}${this.apiKey}/search_all_teams.php?s=Soccer&c=${strCountry}`;
    return this.http.get(url);
  }

  getPlayerByName(strPlayer: string) {
    const url = `${this.baseUrl}${this.apiKey}/searchplayers.php?p=${strPlayer}`;
    return this.http.get(url);
  }



  getEvents() {
    const url = `${this.baseUrl}${this.apiKey}/eventsseason.php?id=4328&s=2023-2024`;
    return this.http.get(url);
  }


  getEventsByYear(strYear: number) {
    const url = `${this.baseUrl}${this.apiKey}/eventsseason.php?id=4328&s=${strYear}`;
    return this.http.get(url);
  }
  // Tambahkan metode lain sesuai dengan kebutuhan proyek Anda, seperti mendapatkan detail olahraga, jadwal pertandingan, dll.
}