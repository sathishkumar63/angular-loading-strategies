import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import {
  LazyLoadingChild1Component,
  LazyLoadingChild2Component,
} from './components';
import { LazyLoadingHomeComponent } from './containers';

@NgModule({
  declarations: [
    LazyLoadingChild1Component,
    LazyLoadingChild2Component,
    LazyLoadingHomeComponent,
  ],
  imports: [CommonModule, LazyLoadingRoutingModule],
  exports: [LazyLoadingHomeComponent],
})
export class LazyLoadingModule {}
