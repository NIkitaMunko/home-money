import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {CategoriesService} from '../../shared/services/categories.service';
import {Category} from '../../shared/models/category.model';

@Component({
  selector: 'wfm-add-category',
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {

  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(private categoryService: CategoriesService) {
  }

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity);

    this.categoryService.addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({capacity: 1})
        this.onCategoryAdd.emit(category);
      })
  }
}
