import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import {
  LazyLoadingChild1Component,
  LazyLoadingChild2Component,
} from './components';
import { LazyLoadingHomeComponent } from './containers';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    LazyLoadingChild1Component,
    LazyLoadingChild2Component,
    LazyLoadingHomeComponent,
  ],
  imports: [CommonModule, LazyLoadingRoutingModule, MatTabsModule],
  exports: [LazyLoadingHomeComponent],
})
export class LazyLoadingModule {}
