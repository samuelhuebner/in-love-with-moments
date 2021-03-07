import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeShowcaseComponent } from './containers/home-showcase/home-showcase.component';
import { AboutMeComponent } from './containers/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { PortfolioSelectorComponent } from './containers/portfolio-selector/portfolio-selector.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WeddingPortfolioComponent } from './components/wedding-portfolio/wedding-portfolio.component';
import { PortfolioShowcaseComponent } from './containers/portfolio-showcase/portfolio-showcase.component';
import { PortraitPortfolioComponent } from './components/portrait-portfolio/portrait-portfolio.component';
import { FamilyPortfolioComponent } from './components/family-portfolio/family-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeShowcaseComponent,
    AboutMeComponent,
    FooterComponent,
    LogoComponent,
    PortfolioSelectorComponent,
    PortfolioComponent,
    WeddingPortfolioComponent,
    PortfolioShowcaseComponent,
    PortraitPortfolioComponent,
    FamilyPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
