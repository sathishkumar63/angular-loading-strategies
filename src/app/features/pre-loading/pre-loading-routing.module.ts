import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PreLoadingChild1Component,
  PreLoadingChild2Component,
} from './components';
import { PreLoadingHomeComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: PreLoadingHomeComponent,
    children: [
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: PreLoadingChild1Component },
      { path: 'child2', component: PreLoadingChild2Component },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreLoadingRoutingModule {}
