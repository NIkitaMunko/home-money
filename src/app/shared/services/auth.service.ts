import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = true;
    window.localStorage.clear();
  }

  isLoggedIn() : boolean {
    return this.isAuthenticated;
  }

}
