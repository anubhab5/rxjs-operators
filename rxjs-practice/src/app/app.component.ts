import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable, of } from 'rxjs';
import { User } from './services/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-practice';

  data$!: Observable<User[]>;

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    // this.data$ = this.userSvc.getData();
    this.ofOperator();
  }

  ofOperator() {
    // Create an observable that emits three values: 1, 2, and 3
    const observable = of(1, 2, 3);

    debugger;
    // Subscribe to the observable
    observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Observable completed'),
    });
  }
}
