import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Holds all displayed admin settings 
  categories = [
    { name: 'Home showcase', iconName: 'collections', routerLink: '/admin/home' },
    { name: 'About me', iconName: 'account_box', routerLink: '/admin/about-me' },
    { name: 'Portfolio', iconName: 'apps', routerLink: '/admin/portfolio' },
    { name: 'Page settings', iconName: 'settings_applications', routerLink: '/admin/settings' }
  ];

  constructor(public router: Router, public authService: AuthService, categoryService: CategoryService) { }

  ngOnInit(): void {

  }

  public onLogout(): void {
    this.authService.signOut();
  }
}
