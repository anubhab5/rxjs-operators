import { Component, OnInit } from '@angular/core';
import { CreationOpService } from '../services/creation-op.service';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.scss'],
})
export class CreationOperatorsComponent implements OnInit {
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
        routeName: 'ajax',
        routePath: 'ajax-operator',
        isCompleted: false,
      },
      {
        routeName: 'bindCallback',
        routePath: 'bindCallback-operator',
        isCompleted: false,
      },
      {
        routeName: 'bindNodeCallback',
        routePath: 'bindNodeCallback-operator',
        isCompleted: false,
      },
      {
        routeName: 'defer',
        routePath: 'defer-operator',
        isCompleted: false,
      },
      {
        routeName: 'empty',
        routePath: 'empty-operator',
        isCompleted: false,
      },
      {
        routeName: 'from',
        routePath: 'from-operator',
        isCompleted: true,
      },
      {
        routeName: 'fromEvent',
        routePath: 'fromEvent-operator',
        isCompleted: true,
      },
      {
        routeName: 'fromEventPattern',
        routePath: 'fromEventPattern-operator',
        isCompleted: false,
      },
      {
        routeName: 'generate',
        routePath: 'generate-operator',
        isCompleted: false,
      },
      {
        routeName: 'interval',
        routePath: 'interval-operator',
        isCompleted: false,
      },
      {
        routeName: 'of',
        routePath: 'of-operator',
        isCompleted: true,
      },
      {
        routeName: 'range',
        routePath: 'range-operator',
        isCompleted: false,
      },
      {
        routeName: 'throwError',
        routePath: 'throwError-operator',
        isCompleted: false,
      },
      {
        routeName: 'timer',
        routePath: 'timer-operator',
        isCompleted: false,
      },
      {
        routeName: 'iif',
        routePath: 'iif-operator',
        isCompleted: false,
      },
    ];
  }
}
