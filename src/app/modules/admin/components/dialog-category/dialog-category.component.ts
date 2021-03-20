import { Component, Inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models';


@Component({
  selector: 'app-dialog-category',
  templateUrl: './dialog-category.component.html',
  styleUrls: ['./dialog-category.component.scss']
})
export class DialogCategoryComponent implements OnInit {
  public isEdit: boolean;
  public category: Category;
  public placeholderText: string;

  constructor(
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    if (this.isEdit) {
      this.category = { ... this.data.category } as Category;
      this.placeholderText = this.category.translationDE;
    } else {
      this.placeholderText = 'New category';
      this.category = { name: '', translationDE: '' };
    }
  }

  /**
   * Saves or creates a category in firebase
   */
  public onSubmit(value: { categoryName: string }, isEdit: boolean): void {
    const categoryName = this.removeUmlauts(value.categoryName);
    if (!isEdit) {
      this.categoryService.createNewCategory({ name: categoryName.toLowerCase(), translationDE: value.categoryName });
      return;
    }

    this.categoryService.updateCategory({ name: categoryName.toLowerCase(), translationDE: value.categoryName, id: this.category.id })
  }


  /**
   * Removes umlauts form a string and replaces them with the corresponding english words
   */
  private removeUmlauts(str): string {
    let cleanString = str.replace(/\u00e4/g, 'ae');
    cleanString = cleanString.replace(/\u00c4/g, 'Ae');
    cleanString = cleanString.replace(/\u00dc/g, 'Ue');
    cleanString = cleanString.replace(/\u00fc/g, 'ue');
    cleanString = cleanString.replace(/\u00d6/g, 'Oe');
    cleanString = cleanString.replace(/\u00f6/g, 'oe');
    cleanString = cleanString.replace(/\u00df/g, 'ss');
    return cleanString;
  }
}
