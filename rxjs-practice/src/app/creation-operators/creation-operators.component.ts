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
      },
      {
        routeName: 'bindCallback',
        routePath: 'bindCallback-operator',
      },
      {
        routeName: 'bindNodeCallback',
        routePath: 'bindNodeCallback-operator',
      },
      {
        routeName: 'defer',
        routePath: 'defer-operator',
      },
      {
        routeName: 'empty',
        routePath: 'empty-operator',
      },
      {
        routeName: 'from',
        routePath: 'from-operator',
      },
      {
        routeName: 'fromEvent',
        routePath: 'fromEvent-operator',
      },
      {
        routeName: 'fromEventPattern',
        routePath: 'fromEventPattern-operator',
      },
      {
        routeName: 'generate',
        routePath: 'generate-operator',
      },
      {
        routeName: 'interval',
        routePath: 'interval-operator',
      },
      {
        routeName: 'of',
        routePath: 'of-operator',
      },
      {
        routeName: 'range',
        routePath: 'range-operator',
      },
      {
        routeName: 'throwError',
        routePath: 'throwError-operator',
      },
      {
        routeName: 'timer',
        routePath: 'timer-operator',
      },
      {
        routeName: 'iif',
        routePath: 'iif-operator',
      },
    ];
  }
}
