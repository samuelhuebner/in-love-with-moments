import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitPortfolioComponent } from './portrait-portfolio.component';

describe('PortraitPortfolioComponent', () => {
  let component: PortraitPortfolioComponent;
  let fixture: ComponentFixture<PortraitPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortraitPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
