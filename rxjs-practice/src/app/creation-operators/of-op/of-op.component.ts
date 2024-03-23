import { Component, OnInit } from '@angular/core';
import { OfService } from './of.service';

@Component({
  selector: 'app-of-op',
  templateUrl: './of-op.component.html',
  styleUrls: ['./of-op.component.scss'],
})
export class OfOpComponent implements OnInit {
  /**
   *
   * @param ofDemoSvc
   */
  constructor(private ofDemoSvc: OfService) {}

  /**
   *
   */
  ngOnInit(): void {
    this.demoOfOperator();
  }

  /**
   *
   */
  demoOfOperator() {
    this.ofDemoSvc.ofOperatorDemo().subscribe((resp) => {
      console.log(`From demo values: ${resp}`);
    });
  }
}
