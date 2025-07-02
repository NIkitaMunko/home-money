import { Component, OnInit } from '@angular/core';
import {AddEventComponent} from './add-event/add-event.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';
import {Category} from '../shared/models/category.model';
import {CategoriesService} from '../shared/services/categories.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'wfm-records-page',
  imports: [
    AddEventComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    NgIf
  ],
  templateUrl: './records-page.component.html',
  styleUrl: './records-page.component.scss'
})
export class RecordsPageComponent implements OnInit {

  categories: Category[] = [];
  isLoaded = false;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        this.isLoaded = true;
      })
  }

  newCategoryAdded(category: Category) {
    this.categories.push(category);
  }

  categoryWasEdited(category: Category) {
    const idx = this.categories
      .findIndex(c => c.id === category.id);
    this.categories[idx] = category;
  }

}
