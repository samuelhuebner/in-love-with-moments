import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models';
import { CategoryService } from '../../services/category.service';
import { DialogCategoryComponent } from '../dialog-category/dialog-category.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public categories: Category[];
  public disabledExpansion: false;

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const categoriesObservable = this.categoryService.getCategories();
    categoriesObservable.subscribe(data => {
      this.categories = data;
    });
  }

  /**
   * Opens the category modal
   */
  public openCategoryModal(isEdit: boolean, category?: Category): void {
    const data = {
      isEdit,
      category: null
    };

    if (isEdit && category) {
      data.category = category;
    } else {
      delete data.category;
    }

    const dialogRef = this.dialog.open(DialogCategoryComponent, {
      // width: '90vw',
      data
    });
  }

  public deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id);
  }
}
