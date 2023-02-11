import { createReducer, on } from '@ngrx/store';
import { decrementAction, incrementAction, resetAction } from '@counter/store';

export const counterFeatureKey = 'counter';
export interface CounterState {
  count: number;
}

export const counterInitialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  counterInitialState,
  on(incrementAction, (state, action) => {
    return {
      count: state.count + 1,
    };
  }),
  on(decrementAction, (state, action) => {
    return {
      count: state.count - 1,
    };
  }),
  on(resetAction, (state, action) => {
    return {
      count: 0,
    };
  })
);
