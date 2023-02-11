import { NgModule } from '@angular/core';
import { CounterComponent } from './components';
import { StoreModule } from '@ngrx/store';
import { counterFeatureKey, counterReducer } from '@counter/store';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffect } from '@counter/store';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    StoreModule.forFeature(counterFeatureKey, counterReducer),
    EffectsModule.forFeature([CounterEffect]),
    AsyncPipe,
  ],
  exports: [CounterComponent],
})
export class CounterModule {}
