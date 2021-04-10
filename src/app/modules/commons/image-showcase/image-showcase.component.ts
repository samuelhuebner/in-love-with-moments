import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-showcase',
  templateUrl: './image-showcase.component.html',
  styleUrls: ['./image-showcase.component.scss']
})
export class ImageShowcaseComponent implements OnInit {
  @Input() images: string[];
  @Input() editMode: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public deleteImage(url: string) {

  }
}
