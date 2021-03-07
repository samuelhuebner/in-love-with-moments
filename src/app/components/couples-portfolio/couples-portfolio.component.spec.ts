import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplesPortfolioComponent } from './couples-portfolio.component';

describe('CouplesPortfolioComponent', () => {
  let component: CouplesPortfolioComponent;
  let fixture: ComponentFixture<CouplesPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouplesPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplesPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
