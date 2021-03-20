import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeShowcaseComponent } from './components/home-showcase/home-showcase.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeShowcaseComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
