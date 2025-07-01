import { Component } from '@angular/core';
import {AddEventComponent} from './add-event/add-event.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';
import {Category} from '../shared/models/category.model';

@Component({
  selector: 'wfm-records-page',
  imports: [
    AddEventComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  templateUrl: './records-page.component.html',
  styleUrl: './records-page.component.scss'
})
export class RecordsPageComponent {

  newCategoryAdded(category: Category) {
    // todo add to array
  }

}
