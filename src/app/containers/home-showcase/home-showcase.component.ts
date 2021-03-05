import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-showcase',
  templateUrl: './home-showcase.component.html',
  styleUrls: ['./home-showcase.component.scss']
})
export class HomeShowcaseComponent implements OnInit {
  numberOfSlides: number;
  currentSlideIndex: number;

  constructor() { }

  ngOnInit(): void {
    // TODO: This has to be set dynamically when loading the images from the web
    this.numberOfSlides = 8;

    this.currentSlideIndex = this.getRandomInt(this.numberOfSlides + 1);
    this.showSlide(this.currentSlideIndex);
  }

  /**
   * Sets the visibility of the slide
   * @param slideIdex Index of the slide to show
   */
  showSlide(slideIdex: number): void {
    const slides = Array.from(document.getElementsByClassName('showcase__slide') as HTMLCollectionOf<HTMLElement>);

    if (!(slides instanceof Array)) {
      return;
    }

    if (slideIdex > slides.length) {
      this.currentSlideIndex = 0;
    } else if (slideIdex < 0) {
      this.currentSlideIndex = this.numberOfSlides - 1;
    } else {
      this.currentSlideIndex = slideIdex;
    }


    slides.forEach((item, index) => {
      if (index !== this.currentSlideIndex) {
        item.style.display = 'none';
        return;
      }

      item.style.display = 'block';
    });

  }

  /**
   * Returns a random number that lays between 0 and the given range
   * @param range e.g: 10 --> returns number between 0 and 9
   */
  getRandomInt(range: number): number {
    return Math.floor(Math.random() * Math.floor(range));
  }
}
