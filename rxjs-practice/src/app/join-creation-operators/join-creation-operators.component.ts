import { Component, OnInit } from '@angular/core';
import { CreationOpService } from '../services/creation-op.service';

@Component({
  selector: 'app-join-creation-operators',
  templateUrl: './join-creation-operators.component.html',
  styleUrls: ['./join-creation-operators.component.scss'],
})
export class JoinCreationOperatorsComponent implements OnInit {
  /**
   *
   */
  creationOperatorList: any[] = [];
  /**
   *
   */
  constructor(private creationSvc: CreationOpService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.initializeCreationRoute();
  }

  initializeCreationRoute() {
    this.creationOperatorList = [
      {
        routeName: 'combineLatest',
        routePath: 'combineLatest',
      },
      {
        routeName: 'concat',
        routePath: 'concat',
      },
      {
        routeName: 'forkJoin',
        routePath: 'defer-operator',
      },
      {
        routeName: 'merge',
        routePath: 'empty-operator',
      },
      {
        routeName: 'partition',
        routePath: 'from-operator',
      },
      {
        routeName: 'race',
        routePath: 'of-operator',
      },
      {
        routeName: 'zip',
        routePath: 'of-operator',
      },
    ];
  }
}
