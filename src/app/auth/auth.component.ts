import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'wfm-auth',
  imports: [
    RouterOutlet
  ],
  templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }
}
