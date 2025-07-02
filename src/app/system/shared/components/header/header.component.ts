import {Component, OnInit} from '@angular/core';
import {DatePipe, NgIf} from '@angular/common';
import {DropdownDirective} from '../../directives/dropdown.directive';
import {Router, RouterLink} from '@angular/router';
import {User} from '../../../../shared/models/user.model';
import {AuthService} from '../../../../shared/services/auth.service';

@Component({
  selector: 'wfm-header',
  imports: [
    DatePipe,
    DropdownDirective,
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.user = JSON.parse(<string>window.localStorage.getItem('user'));
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
