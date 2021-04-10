import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models';
import { ImageService } from 'src/app/services/image.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.scss']
})
export class TitleImageComponent implements OnInit {
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  uploadProgress: Observable<any>;

  @Input() category: Category;

  public coverImageUrl: any;

  constructor(
    private afStorage: AngularFireStorage,
    private categoryService: CategoryService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.coverImageUrl = this.afStorage.ref(`images/${this.category.name}/cover`).getDownloadURL();
  }

  /**
   * Uploads an image to firebase
   */
  public async uploadCoverImage(event): Promise<void> {
    const uploadPath = `images/${this.category.name}/`;
    this.task = this.imageService.uploadImage(event.target.files[0], uploadPath, 'cover');
    this.uploadProgress = this.task.percentageChanges();

    await this.task;
    this.category.hasCoverImage = true;
    await this.categoryService.updateCategory(this.category);
  }

  /**
   * Deletes the cover image of a category
   */
  public async deleteCoverImage(): Promise<void> {
    const path = `images/${this.category.name}/cover`;
    await this.imageService.deleteImage(path).toPromise();

    this.category.hasCoverImage = false;
    await this.categoryService.updateCategory(this.category);
  }
}
