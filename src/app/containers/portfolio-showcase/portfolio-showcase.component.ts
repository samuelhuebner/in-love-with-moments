import { Component, Input, OnInit } from '@angular/core';
import { shuffle } from 'src/app/utils';

@Component({
  selector: 'app-portfolio-showcase',
  templateUrl: './portfolio-showcase.component.html',
  styleUrls: ['./portfolio-showcase.component.scss']
})
export class PortfolioShowcaseComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() infoText: string;
  @Input() titlePicturePath: string;
  @Input() picturePaths: string[];
  images: string[];

  constructor() { }

  ngOnInit(): void {
    // TODO: Move this to the parent component
    this.images = [
      '../../../assets/images/portfolio-selector/wedding.JPG',
      '../../../assets/images/portfolio-selector/family.JPG',
      '../../../assets/images/portfolio-selector/couples.JPG',
      '../../../assets/images/portfolio-selector/portrait.JPG',
      '../../../assets/images/DSC03029-min.JPG',
      '../../../assets/images/DSC04705-min.JPG',
      '../../../assets/images/DSC05068-min.JPG',
      '../../../assets/images/DSC04544-min.jpeg',
      '../../../assets/images/DSC03051-min.jpeg',
      '../../../assets/images/DSC02390-min.jpeg'
    ];

    shuffle(this.images);
  }
}
