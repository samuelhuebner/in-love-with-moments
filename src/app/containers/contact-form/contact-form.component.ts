import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

import { PortfolioSection } from 'src/app/models';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  portfolioService: PortfolioService;
  portfolioSections: PortfolioSection[];

  selectedPortfolio: any;

  sources = [
    'Freund/Familie',
    'Instagram/Facebook',
    'Sonstiges'
  ];

  constructor(portfolioService: PortfolioService) {
    this.portfolioService = portfolioService;
  }

  ngOnInit(): void {
    this.portfolioSections = this.portfolioService.getPortfolioSections();
  }

  /**
   * Is called when the portfolio is changed by the user
   * @param data The selected portfolio
   */
  portfolioChange(data: PortfolioSection): void {
    this.selectedPortfolio = data.name;
  }

}
