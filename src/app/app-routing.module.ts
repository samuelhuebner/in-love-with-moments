import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CouplesPortfolioComponent } from './components/couples-portfolio/couples-portfolio.component';
import { FamilyPortfolioComponent } from './components/family-portfolio/family-portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortraitPortfolioComponent } from './components/portrait-portfolio/portrait-portfolio.component';
import { WeddingPortfolioComponent } from './components/wedding-portfolio/wedding-portfolio.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'portfolio/couples', component: CouplesPortfolioComponent },
  { path: 'portfolio/family', component: FamilyPortfolioComponent },
  { path: 'portfolio/portraits', component: PortraitPortfolioComponent },
  { path: 'portfolio/wedding', component: WeddingPortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
