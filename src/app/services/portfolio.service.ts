import { Injectable } from '@angular/core';
import { PortfolioSection } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolioSections(): PortfolioSection[] {
    // TODO: Move this to the backend
    return [
      { name: 'Wedding', routerLink: '/portfolio/wedding', imagePath: '../../../assets/images/portfolio-selector/wedding.JPG' },
      { name: 'Family', routerLink: '/portfolio/family', imagePath: '../../../assets/images/portfolio-selector/family.JPG' },
      { name: 'Couples', routerLink: '/portfolio/couples', imagePath: '../../../assets/images/portfolio-selector/couples.JPG' },
      { name: 'Portraits', routerLink: '/portfolio/portraits', imagePath: '../../../assets/images/portfolio-selector/portrait.JPG' }
    ];
  }
}
