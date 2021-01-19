import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EagerHomeComponent } from './containers';
import { EagerChild1Component, EagerChild2Component } from './components';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    EagerHomeComponent,
    EagerChild1Component,
    EagerChild2Component,
  ],
  imports: [CommonModule, RouterModule, MatTabsModule],
  exports: [EagerHomeComponent],
})
export class EagerLoadingModule {}
