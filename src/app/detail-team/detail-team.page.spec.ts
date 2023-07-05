import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTeamPage } from './detail-team.page';

describe('DetailTeamPage', () => {
  let component: DetailTeamPage;
  let fixture: ComponentFixture<DetailTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
