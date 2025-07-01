import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {map, Observable} from 'rxjs';
import {BaseApi} from '../core/base-api';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApi {

  constructor(public override http: HttpClient) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User | undefined> {
    return this.get(`users?email=${email}`)
      .pipe(
        map(users => users[0] ? users[0] : undefined)
      );
  }

  createNewUser(user: User): Observable<User> {
    return this.post('users', user);
  }

}
