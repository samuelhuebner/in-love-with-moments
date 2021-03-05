import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit{
  public isHamburger = false;

  private hamburger: any;
  private headerLinks: any;
  private links: any;

  constructor(private elemetRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.hamburger = this.elemetRef.nativeElement.querySelector('.hamburger');
    this.headerLinks = this.elemetRef.nativeElement.querySelector('.header-links');
    this.links = this.elemetRef.nativeElement.querySelector('.header-links li');

    this.hamburger.addEventListener('click', this.hamburgerClick.bind(this));
  }

  public hamburgerClick(): void {
    this.isHamburger = !this.isHamburger;
  }
}
