import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SwiperModule } from 'swiper/angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


import { environment } from 'src/environments/environment';

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
import { PrivacyComponent } from './components/privacy/privacy.component';

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
    ContactFormComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
