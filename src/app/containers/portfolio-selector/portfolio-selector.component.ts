import { Component, OnInit } from '@angular/core';
import { PortfolioSection } from 'src/app/models';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio-selector',
  templateUrl: './portfolio-selector.component.html',
  styleUrls: ['./portfolio-selector.component.scss']
})
export class PortfolioSelectorComponent implements OnInit {
  portfolioSections: PortfolioSection[];
  portfolioService: PortfolioService;

  constructor(portfolioService: PortfolioService) {
    this.portfolioService = portfolioService;
  }

  ngOnInit(): void {
    this.portfolioSections = this.portfolioService.getPortfolioSections();
  }
}
