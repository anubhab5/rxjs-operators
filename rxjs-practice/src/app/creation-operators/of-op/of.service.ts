import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfService {
  /**
   *
   */
  constructor() {}

  /**
   *
   * @returns
   */
  ofOperatorDemo() {
    return of(1, 2, 3);
  }
}
