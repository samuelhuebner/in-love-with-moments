import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-portfolio',
  templateUrl: './wedding-portfolio.component.html',
  styleUrls: ['./wedding-portfolio.component.scss']
})
export class WeddingPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
