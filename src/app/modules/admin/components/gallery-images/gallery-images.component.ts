import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models';
import { ImageService } from 'src/app/services/image.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.scss']
})
export class GalleryImagesComponent implements OnInit {

  constructor(
    private imageService: ImageService,
    private afsStorage: AngularFireStorage,
    private categoryService: CategoryService
  ) { }

  @Input() category: Category;

  /**
   * Reference to the categories image folder
   */
  private imageFolderRef: AngularFireStorageReference;
  private task: AngularFireUploadTask;

  public imageUrls: string[];
  public uploadProgress: Observable<number>;

  ngOnInit(): void {
    this.imageFolderRef = this.afsStorage.ref(`images/${this.category.name}`);

    this.imageFolderRef.listAll()
      .subscribe((result) => {
        this.imageUrls = [];
        result.items.forEach(async (item) => {
          // We don't want cover images to show up
          if (item.name === 'cover') {
            return;
          }
          const url = await item.getDownloadURL();
          this.imageUrls.push(url);
        });
      });
  }

  /**
   * Uploads an image to firebase
   */
  public async uploadImage(event): Promise<void> {
    const uploadPath = `images/${this.category.name}/`;
    this.task = this.imageService.uploadImage(event.target.files[0], uploadPath);
    this.uploadProgress = this.task.percentageChanges();

    await this.task;
    this.category.hasCoverImage = true;
    await this.categoryService.updateCategory(this.category);
  }

}
