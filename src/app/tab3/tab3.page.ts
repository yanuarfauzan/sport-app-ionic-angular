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

  // fetchDataPlayerByName(strPlayer: string) {
  //   this.TheSportsDBService.getPlayerByName(strPlayer).subscribe((data: any) => {
  //     this.players = data.player
  //     console.log(this.players);
  //   })
  // }

}
