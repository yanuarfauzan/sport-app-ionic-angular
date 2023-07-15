import { Component } from '@angular/core';
import { TheSportsDBService } from '../services/thesportsdb.service';
import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


interface Player {
  idPlayer: string;
  strPlayer: string;
  strDescriptionEN: string;
  strPosition: string;
  strHeight: string;
  strWeight: string;
  strThumb: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  strPlayerName: string = 'Danny Welbeck';
  players: Player[] = [];

  constructor(private TheSportsDBService: TheSportsDBService, private navCtrl: NavController) { }


  ngOnInit() {
  }

  fetchDataPlayerByName(strPlayer: string) {
    this.TheSportsDBService.getPlayerByName(strPlayer)
      .subscribe(
        (data: any) => {
          this.players = data.player.filter((player: any) => player.strSport.toLowerCase() === 'soccer');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  savePlayer(player: any) {
    const storedFavorites = localStorage.getItem('favPlayer');
    let players: any[] = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Cek apakah player sudah ada di localStorage berdasarkan idPlayer
    const index = players.findIndex((p) => p.idPlayer === player.idPlayer);

    if (index > -1) {
      // Jika player sudah ada, gantikan dengan player yang baru
      players[index] = player;
    } else {
      // Jika player belum ada, tambahkan ke array players
      players.push(player);
    }

    localStorage.setItem('favPlayer', JSON.stringify(players));
  }

}
