import { Component } from '@angular/core';
import {AddEventComponent} from './add-event/add-event.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';

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

}
