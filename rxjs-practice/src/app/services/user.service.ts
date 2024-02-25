import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, last, map, of } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    /** */
  }

  getData() {
    return of([
      new User('Anil Ambani', 'anilambani@gmail.com', 'Mumbai'),
      new User('Nita Ambani', 'nitaambani@gmail.com', 'Mumbai'),
      new User('Rajnikant', 'thalaiva@gmail.com', 'Chennai'),
    ])
      .pipe(
        map((data: User[], index: number) => {
          data[0].setSalary(1000 * (index + 1));
          return data;
        })
      )
      .pipe(
        map((data) => {
          data[0].gender = 'DONT KNOW';
          return data;
        })
      );
  }
}
