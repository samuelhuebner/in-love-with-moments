import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShowcaseComponent } from './image-showcase/image-showcase.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [ImageShowcaseComponent, UploadImageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ImageShowcaseComponent]
})
export class CommonsModule { }
