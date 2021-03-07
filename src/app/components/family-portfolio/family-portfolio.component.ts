import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-portfolio',
  templateUrl: './family-portfolio.component.html',
  styleUrls: ['./family-portfolio.component.scss']
})
export class FamilyPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
