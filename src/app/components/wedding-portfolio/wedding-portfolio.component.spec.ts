import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPortfolioComponent } from './wedding-portfolio.component';

describe('WeddingPortfolioComponent', () => {
  let component: WeddingPortfolioComponent;
  let fixture: ComponentFixture<WeddingPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
