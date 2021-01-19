import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoadingRoutingModule } from './pre-loading-routing.module';
import { PreLoadingHomeComponent } from './containers';
import {
  PreLoadingChild1Component,
  PreLoadingChild2Component,
} from './components';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    PreLoadingHomeComponent,
    PreLoadingChild1Component,
    PreLoadingChild2Component,
  ],
  imports: [CommonModule, PreLoadingRoutingModule, MatTabsModule],
  exports: [PreLoadingHomeComponent],
})
export class PreLoadingModule {}
