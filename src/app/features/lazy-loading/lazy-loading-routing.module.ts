import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LazyLoadingChild1Component,
  LazyLoadingChild2Component
} from './components';
import { LazyLoadingHomeComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadingHomeComponent,
    children: [
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: LazyLoadingChild1Component },
      { path: 'child2', component: LazyLoadingChild2Component }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule {}
