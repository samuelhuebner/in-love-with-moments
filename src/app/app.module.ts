import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeShowcaseComponent } from './containers/home-showcase/home-showcase.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './containers/footer/footer.component';
import { LogoComponent } from './containers/logo/logo.component';
import { PortfolioSelectorComponent } from './containers/portfolio-selector/portfolio-selector.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WeddingPortfolioComponent } from './components/wedding-portfolio/wedding-portfolio.component';
import { PortfolioShowcaseComponent } from './containers/portfolio-showcase/portfolio-showcase.component';
import { PortraitPortfolioComponent } from './components/portrait-portfolio/portrait-portfolio.component';
import { FamilyPortfolioComponent } from './components/family-portfolio/family-portfolio.component';
import { CouplesPortfolioComponent } from './components/couples-portfolio/couples-portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './containers/contact-form/contact-form.component';

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
    FamilyPortfolioComponent,
    CouplesPortfolioComponent,
    ContactComponent,
    ContactFormComponent
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
