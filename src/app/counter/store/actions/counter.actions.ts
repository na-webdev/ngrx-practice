import { createAction } from '@ngrx/store';

export const incrementAction = createAction('[Counter Page] increment counter');
export const decrementAction = createAction('[Counter Page] decrement counter');
export const resetAction = createAction('[Counter Page] reset counter');
