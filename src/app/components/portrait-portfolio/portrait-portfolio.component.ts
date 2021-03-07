import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait-portfolio',
  templateUrl: './portrait-portfolio.component.html',
  styleUrls: ['./portrait-portfolio.component.scss']
})
export class PortraitPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
