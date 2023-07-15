import { Component } from '@angular/core';
import { TheSportsDBService } from '../services/thesportsdb.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  events: any[] = [];

  selectedYear: number | undefined;
  yearOptions: string[] = [];

  constructor(private theSportsDBService: TheSportsDBService) {
    const startYear = 2010;
    const currentYear = new Date().getFullYear();

    for (let i = startYear; i <= currentYear; i++) {
      const yearRange = `${i}-${i + 1}`;
      this.yearOptions.push(yearRange);
    }
  }

  ngOnInit() {
    this.fetchDataEvents();
  }

  fetchDataEvents() {
    this.theSportsDBService.getEvents().subscribe((data: any) => {
      this.events = data.events;
      console.log(data);
    });
  }
  onChangeYear() {
    if (this.selectedYear) {
      this.theSportsDBService.getEventsByYear(this.selectedYear).subscribe((data: any) => {
        this.events = data.events;
        console.log(data);
      })
    }
  }

  saveMatch(event: any) {
    const storedFavorites = localStorage.getItem('favMatch');
    let matches: any[] = storedFavorites ? JSON.parse(storedFavorites) : [];
  
    // Cek apakah event sudah ada di localStorage berdasarkan idEvent
    const index = matches.findIndex((match) => match.idEvent === event.idEvent);
  
    if (index > -1) {
      // Jika event sudah ada, gantikan dengan event yang baru
      matches[index] = event;
    } else {
      // Jika event belum ada, tambahkan ke array matches
      matches.push(event);
    }
  
    localStorage.setItem('favMatch', JSON.stringify(matches));
  }
  


}