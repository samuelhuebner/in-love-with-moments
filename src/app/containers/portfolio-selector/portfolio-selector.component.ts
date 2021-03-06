import { Component, OnInit } from '@angular/core';
import { PortfolioSection } from 'src/app/models';

@Component({
  selector: 'app-portfolio-selector',
  templateUrl: './portfolio-selector.component.html',
  styleUrls: ['./portfolio-selector.component.scss']
})
export class PortfolioSelectorComponent implements OnInit {
  portfolioSections: PortfolioSection[];

  constructor() {
    // TODO: Move this to the backend
    this.portfolioSections = [
      { name: 'Wedding', routerLink: 'portfolio', imagePath: '../../../assets/images/portfolio-selector/wedding.JPG' },
      { name: 'Family', routerLink: 'portfolio', imagePath: '../../../assets/images/portfolio-selector/family.JPG' },
      { name: 'Couples', routerLink: 'portfolio', imagePath: '../../../assets/images/portfolio-selector/couples.JPG' },
      { name: 'Portraits', routerLink: 'portfolio', imagePath: '../../../assets/images/portfolio-selector/portrait.JPG' }
    ];
  }

  ngOnInit(): void {
  }
}
