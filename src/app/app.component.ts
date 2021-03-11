import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { ImageService } from './services/image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inlovewithmoments';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // Initializes the animate on scroll library
    AOS.init({
      once: false,
      mirror: true
    });
  }

  /**
   * Checks if the current route includes the string
   */
  public hasRoute(route: string): boolean {
    return this.router.url.includes(route);
  }
}
