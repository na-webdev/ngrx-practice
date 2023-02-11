import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrementAction, incrementAction, resetAction } from '@counter/store';
import { tap } from 'rxjs';

@Injectable()
export class CounterEffect {
  constructor(private actions$: Actions) {}
  log$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(incrementAction, decrementAction, resetAction),
        tap(() => console.log('Action logged'))
      ),
    { dispatch: false }
  );
}
