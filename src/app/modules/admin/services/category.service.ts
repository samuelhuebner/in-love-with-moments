import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  categoriesObservable: Observable<{ name: string; translationDE: string; translationEN?: string; }[]>;
  constructor(private db: AngularFirestore) {
    this.categoriesObservable = this.db.collection<Category>('categories').valueChanges({ idField: 'id' });
  }

  public getCategories(): Observable<Category[]> {
    return this.categoriesObservable;
  }

  /**
   * Creates a new category
   */
  public async createNewCategory(category: Category): Promise<DocumentReference<Category>> {
    try {
      category.hasCoverImage = false;
      const result = await this.db.collection<Category>('categories').add({ ...category });
      return result;
    } catch (error) {
      console.error('Error while creating new category!');
      throw error;
    }
  }

  /**
   * Updates an existing category
   */
  public async updateCategory(category: Category): Promise<void> {
    try {
      const writingData = {
        name: category.name,
        translationDE: category.translationDE,
        hasCoverImage: category.hasCoverImage
      };

      await this.db.collection<Category>('categories').doc(category.id).update(writingData);
    } catch (error) {
      console.error('Error while saving category');
      throw error;
    }
  }

  public async deleteCategory(id: string): Promise<void> {
    try {
      await this.db.collection<Category>('categories').doc(id).delete();
    } catch (error) {
      console.error('Error while deleting category');
      throw error;
    }
  }
}
