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

  operatorList: String[] = [];

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
      'Creation',
      'Join Creation',
      'Transformation',
      'Filtering',
      'Join',
      'Multicasting',
      'Error Handling',
      'Utility',
      'Conditional and Boolean',
      'Mathematical and Aggregate',
    ];
  }
}
