import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUserByEmail(email: string): Observable<User | undefined> {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
      .pipe(
        map(users => users[0] ? users[0] : undefined)
      );
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

}
