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
  constructor(private creationSvc: CreationOpService) {}

  /**
   *
   */
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
