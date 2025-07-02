import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Category} from '../../shared/models/category.model';
import {CategoriesService} from '../../shared/services/categories.service';
import {Message} from '../../../shared/models/message.model';

@Component({
  selector: 'wfm-edit-category',
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    NgForOf
  ],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss'
})
export class EditCategoryComponent implements OnInit {

  @Input() categories!: Category[];
  @Output() onCategoryEdit = new EventEmitter<Category>();

  currentCategoryId = "1";
  currentCategory: Category = {name: "", capacity: 1};
  message!: Message;

  constructor(private categoriesService: CategoriesService) {

  }


  onSubmit(form: NgForm) {
    let {capacity, name} = form.value;
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity, +this.currentCategoryId)

    this.categoriesService.updateCategory(category)
      .subscribe(category => {
        this.onCategoryEdit.emit(category);
        this.message.text = 'Категория успешно отредактирована.'
        window.setTimeout(() => {
          this.message.text = '';
        }, 5000)
      })
  }

  onCategoryChange() {
    let c: Category | undefined = this.categories
      .find(c => c && c.id && c.id.toString() === this.currentCategoryId);

    if (c) this.currentCategory = c;
  }

  ngOnInit(): void {
    this.message = new Message('success', '')
    this.onCategoryChange()
  }

}
