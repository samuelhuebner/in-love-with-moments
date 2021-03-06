import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSelectorComponent } from './portfolio-selector.component';

describe('PortfolioSelectorComponent', () => {
  let component: PortfolioSelectorComponent;
  let fixture: ComponentFixture<PortfolioSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
