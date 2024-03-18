import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.scss'],
})
export class Component2Component {
  sub!: Subscription;

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    // this.data$ = this.userSvc.getData();
    // this.ofOperator();
    this.intervalOpDemo();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    // this.sub.remove(this.sub);
  }

  intervalOpDemo() {
    this.sub = this.userSvc.intervalOp(1000).subscribe((resp) => {
      console.log(resp);
    });
  }
}
