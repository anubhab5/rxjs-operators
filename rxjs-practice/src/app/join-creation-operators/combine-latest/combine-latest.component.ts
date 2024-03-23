import { Component, OnInit } from '@angular/core';
import { CombineLatestService } from './combine-latest.service';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit {
  /**
   *
   * @param combineLatestSvc
   */
  constructor(private combineLatestSvc: CombineLatestService) {}

  ngOnInit(): void {
    this.combineLatestDemo();
  }

  combineLatestDemo(): void {
    this.combineLatestSvc.demoCombineLatest().subscribe((resp) => {
      console.log(resp);
    });
  }
}
