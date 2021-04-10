import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private afsStorage: AngularFireStorage) { }

  getAboutMeImage(): any {

  }

  /**
   * Uploads an image to the given path. If no filename was specified a new random id is generated
   * under which the image is then saved
   *
   * @param data      The image reference
   * @param path      The path where the image is stored (e.g. /images/)
   * @param filename  The (optional) filename which will be used to store the image
   */
  public uploadImage(data: any, path: string, filename?: string): AngularFireUploadTask {
    let uploadPath = '' + path;
    if (filename) {
      uploadPath += filename;
    } else {
      const randomId = Math.random().toString(36).substring(2);
      uploadPath += `${randomId}`;
    }

    const ref = this.afsStorage.ref(uploadPath);
    return ref.put(data);
  }

  /**
   * Deletes an image
   * @param path image path
   */
  public deleteImage(path): Observable<any> {
    return this.afsStorage.ref(path).delete();
  }
}
