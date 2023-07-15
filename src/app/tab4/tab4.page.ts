import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public favorites: any[] = [];
  public players: any[] = [];
  public matches: any[] = [];
  selectedSegment: string = '';

  constructor() {
    const storedFavorites = localStorage.getItem('fav');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
      console.log(this.favorites);
    }
    const storedPlayers = localStorage.getItem('favPlayer');
    if (storedPlayers) {
      this.players = JSON.parse(storedPlayers);
      console.log(this.players);
    }
    const storedMatches = localStorage.getItem('favMatch');
    if (storedMatches) {
      this.matches = JSON.parse(storedMatches);
      console.log(this.matches);
    }
  }

  removePlayerFromFavorites(favPlayer: any) {
    const index = this.players.findIndex(item => item.id === favPlayer.id);
    if (index !== -1) {
      this.players.splice(index, 1);
      this.savePlayer();
    }
  }

  savePlayer() {
    localStorage.setItem('favPlayer', JSON.stringify(this.players));
  }

  removePlayerFromLocalStorage(favPlayer: any) {
    const storedPlayers = localStorage.getItem('favPlayer');
    let updatedPlayers: any[] = []; // Perbaikan: Definisikan updatedPlayers di luar blok if
    if (storedPlayers) {
      const players = JSON.parse(storedPlayers) as any[];
      updatedPlayers = players.filter(item => item.id !== favPlayer.id);
      localStorage.setItem('fav', JSON.stringify(updatedPlayers));
    }
    this.favorites = updatedPlayers; // Perbaikan: Perbarui array favorites setelah menghapus dari localStorage
  }


  removeFromFavorites(fav: any) {
    const index = this.favorites.findIndex(item => item.id === fav.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  saveFavorites() {
    localStorage.setItem('fav', JSON.stringify(this.favorites));
  }

  removeFromLocalStorage(fav: any) {
    const storedFavorites = localStorage.getItem('fav');
    let updatedFavorites: any[] = []; // Perbaikan: Definisikan updatedFavorites di luar blok if
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites) as any[];
      updatedFavorites = favorites.filter(item => item.id !== fav.id);
      localStorage.setItem('fav', JSON.stringify(updatedFavorites));
    }
    this.favorites = updatedFavorites; // Perbaikan: Perbarui array favorites setelah menghapus dari localStorage
  }


  // matches

  removeMatchFromFavorites(favMatch: any) {
    const index = this.matches.findIndex(item => item.id === favMatch.id);
    if (index !== -1) {
      this.matches.splice(index, 1);
      this.saveMatch();
    }
  }

  saveMatch() {
    localStorage.setItem('favMatch', JSON.stringify(this.matches));
  }

  removeMatchesFromLocalStorage(favMatch: any) {
    const storedMatches = localStorage.getItem('favMatch');
    let updatedMatches: any[] = []; // Perbaikan: Definisikan updatedMatches di luar blok if
    if (storedMatches) {
      const matches = JSON.parse(storedMatches) as any[];
      updatedMatches = matches.filter(item => item.id !== favMatch.id);
      localStorage.setItem('favMatch', JSON.stringify(updatedMatches));
    }
    this.favorites = updatedMatches; // Perbaikan: Perbarui array favorites setelah menghapus dari localStorage
  }

  ngOnInit() {
  }
}
