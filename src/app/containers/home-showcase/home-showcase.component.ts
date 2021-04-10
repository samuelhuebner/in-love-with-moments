import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
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

  private imageFolderRef: AngularFireStorageReference;

  constructor(
    private afsStorage: AngularFireStorage
  ) {
  }

  ngOnInit(): void {
    this.imageFolderRef = this.afsStorage.ref(`images/showcase`);
    this.imageFolderRef.listAll()
      .subscribe((result) => {
        this.imagePaths = [];
        result.items.forEach(async (item) => {
          // In order to have the option of a first image we have to check for it here
          console.log(item.name);
          let url: string;
          if (item.name.includes('firstImage')) {
            url = await item.getDownloadURL();
            this.imagePaths.unshift(url);
            return;
          }
          url = await item.getDownloadURL();
          this.imagePaths.push(url);
        });
      });
  }
}
