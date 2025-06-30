import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'wfm-system',
  templateUrl: './system.component.html',
  imports: [
    RouterOutlet,
    SidebarComponent
  ]
})
export class SystemComponent {
}
