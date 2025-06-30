import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'wfm-system',
  templateUrl: './system.component.html',
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SystemComponent {
}
