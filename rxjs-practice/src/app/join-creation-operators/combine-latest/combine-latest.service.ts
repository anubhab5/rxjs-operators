import { Injectable } from '@angular/core';
import { combineLatest, delay, of, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CombineLatestService {
  /**
   *
   */
  constructor() {}

  demoCombineLatest() {
    const observables = {
      a: of('a-finish').pipe(delay(1000), startWith('a-start')),
      b: of('b-finish').pipe(delay(5000)),
      c: of('c-finish').pipe(delay(10000), startWith('c-start')),
    };
    return combineLatest(observables);
  }
}
