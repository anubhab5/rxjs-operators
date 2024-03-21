import { Component, OnInit } from '@angular/core';
import { FromService } from './from.service';

@Component({
  selector: 'app-from-op',
  templateUrl: './from-op.component.html',
  styleUrls: ['./from-op.component.scss'],
  providers: [FromService],
})
export class FromOpComponent implements OnInit {
  /**
   *
   */
  constructor(private fromSvc: FromService) {
    //
  }
  /**
   *
   */
  ngOnInit(): void {
    this.demoFromArray();
    this.demoFromPromise();
    this.demoFromIterables();
    this.demoFromObservables();
  }

  demoFromArray(): void {
    this.fromSvc.fromArray().subscribe((resp) => {
      console.log(`from array example: ${resp}`);
    });
  }

  demoFromPromise() {
    this.fromSvc.fromPromise().subscribe((resp) => {
      console.log(`from promise example: ${resp} after 2 seconds`);
    });
  }

  demoFromIterables() {
    this.fromSvc.fromIterables().subscribe((resp) => {
      console.log(`from Iterables example: ${resp} `);
    });
  }

  demoFromObservables() {
    this.fromSvc.fromObservables().subscribe((resp) => {
      console.info(`from Observables example: ${resp} `);
    });
  }
}
