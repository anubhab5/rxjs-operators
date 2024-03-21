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
  /**
   *
   */
  title = 'rxjs-practice';

  operatorList: any[] = [];

  /**
   *
   */
  constructor() {}
  /**
   * Lifecycle Hook to initialize the component variables.
   */
  ngOnInit() {
    this.initializeOperatorTypeList();
  }

  /**
   * Method to assign the operator list
   */
  initializeOperatorTypeList(): void {
    this.operatorList = [
      {
        routeName: 'Creation',
        routePath: 'creation-operator',
      },
      {
        routeName: 'Join Creation',
        routePath: 'join-creation-operator',
      },
    ];
  }
}

// 'Creation',
// 'Join Creation',
// 'Transformation',
// 'Filtering',
// 'Join',
// 'Multicasting',
// 'Error Handling',
// 'Utility',
// 'Conditional and Boolean',
// 'Mathematical and Aggregate',
