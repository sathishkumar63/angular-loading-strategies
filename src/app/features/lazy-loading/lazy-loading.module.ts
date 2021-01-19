import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './components/lazy-loading.component';

@NgModule({
  declarations: [LazyLoadingComponent],
  imports: [CommonModule, LazyLoadingRoutingModule],
})
export class LazyLoadingModule {}
