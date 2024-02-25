# RxJS

---

## Creation Operators

1. ajax \*
2. bindCallback \*
3. bindNodeCallback \*
4. defer \*\*\*
5. empty \*\*
6. from \*\*\*
7. fromEvent \*\*\*
8. fromEventPattern \*\*
9. generate \*\*
10. interval \*\*\*
11. of \*\*\*
12. range \*\*\*
13. throwError \*\*\*
14. timer \*\*\*
15. iif \*\*

---

of
In RxJS, the of operator is used to create an observable sequence that emits a specific set of values in a synchronous manner. It is commonly used to emit a fixed set of values, which can be any number of values separated by commas. The observable created by of emits these values and then completes.
The of operator is often used in combination with other operators or when you need to create an observable with a predefined set of values.

---

from

In RxJS, the from operator is used to convert various other objects and data structures into observables. It is particularly useful for converting:

1. Arrays or array-like objects
2. Iterable objects (e.g., strings, sets, maps)
3. Promises
4. Observables (nested or not)
