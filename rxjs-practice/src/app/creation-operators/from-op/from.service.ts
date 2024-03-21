import { Injectable } from '@angular/core';
import { Observable, from, interval, take } from 'rxjs';

function* generateItems() {
  yield 'Item 1';
  yield 'Item 2';
  yield 'Item 3';
  yield 'Item 4';
}

@Injectable()
export class FromService {
  /**
   *
   */
  constructor() {}

  /**
   *
   * @returns
   */
  fromArray(): Observable<number> {
    return from([1, 2, 3]);
  }

  /**
   *
   * @returns
   */
  fromPromise() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Promise resolved!`);
      }, 2000);
    });
    return from(promise);
  }

  /**
   *
   * @returns
   */
  fromIterables() {
    return from(generateItems());
  }

  /**
   *
   * @returns
   */
  fromObservables() {
    const sourceObservable = interval(1000).pipe(take(5)); // Emit a value every second, for 5 seconds
    // Convert the Observable to another Observable using from
    return from(sourceObservable);
  }
}
