import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoadingRoutingModule } from './pre-loading-routing.module';
import { PreLoadingHomeComponent } from './containers';
import {
  PreLoadingChild1Component,
  PreLoadingChild2Component,
} from './components';

@NgModule({
  declarations: [
    PreLoadingHomeComponent,
    PreLoadingChild1Component,
    PreLoadingChild2Component,
  ],
  imports: [CommonModule, PreLoadingRoutingModule],
  exports: [PreLoadingHomeComponent],
})
export class PreLoadingModule {}
