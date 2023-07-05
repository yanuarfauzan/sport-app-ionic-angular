import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTeamByCountryPage } from './detail-team-by-country.page';

describe('DetailTeamByCountryPage', () => {
  let component: DetailTeamByCountryPage;
  let fixture: ComponentFixture<DetailTeamByCountryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailTeamByCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
