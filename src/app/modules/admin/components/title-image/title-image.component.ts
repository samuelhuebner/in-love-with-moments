import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models';
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

  private coverImageUrl: any;

  constructor(
    private afStorage: AngularFireStorage,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.coverImageUrl = this.afStorage.ref(`images/${this.category.name}/cover`).getDownloadURL();
  }

  public async upload(event, imageType: string) {
    let uploadPath = `images/${this.category.name}/`;
    let isCoverImageUpload = false;

    if (imageType === 'cover-image') {
      uploadPath += 'cover';
      isCoverImageUpload = true;
    } else {
      const randomId = Math.random().toString(36).substring(2);
      uploadPath += `${this.category.name}-${randomId}`;
    }

    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref(uploadPath);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);

    this.uploadProgress = this.task.percentageChanges();

    await this.task;

    if (isCoverImageUpload) {
      this.category.hasCoverImage = true;
      this.categoryService.updateCategory(this.category);
    };
  }
}
