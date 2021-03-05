import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade, Pagination, Scrollbar } from 'swiper/core';

SwiperCore.use([Pagination, EffectFade, Autoplay, Scrollbar]);

@Component({
  selector: 'app-home-showcase',
  templateUrl: './home-showcase.component.html',
  styleUrls: ['./home-showcase.component.scss']
})
export class HomeShowcaseComponent implements OnInit {
  numberOfSlides: number;
  currentSlideIndex: number;
  imagePaths: string[];


  constructor() {
    this.imagePaths = [
      '../../../assets/images/DSC05068-min.JPG',
      '../../../assets/images/DSC_3126-min.JPEG',
      '../../../assets/images/DSC03029-min.JPG',
      '../../../assets/images/DSC04705-min.JPG',
      '../../../assets/images/DSC05577-min.JPG',
      '../../../assets/images/DSC_1608-min.JPG',
      '../../../assets/images/DSC_3847-min.JPG',
      '../../../assets/images/DSC_7793-min.JPG'
    ];
  }

  ngOnInit(): void {
  }
}
