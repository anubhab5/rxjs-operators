import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  /**
   *
   */
  @ViewChild('myButton') myButton!: ElementRef;

  /**
   *
   */
  ngAfterViewInit() {
    // Access the native element of the button
    const buttonElement: HTMLButtonElement = this.myButton.nativeElement;

    // Create an observable for 'click' events on the button
    const clickObservable = fromEvent(buttonElement, 'click');

    // Subscribe to the observable
    clickObservable.subscribe((event) => {
      console.log('Button clicked!', event);
    });
  }
}
