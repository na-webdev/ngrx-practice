import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey, CounterState } from '@counter/store';

export const selectCounterState =
  createFeatureSelector<CounterState>(counterFeatureKey);

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);
