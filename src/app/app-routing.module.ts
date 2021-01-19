import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './core/custom-preloading-strategy';
import {
  EagerChild1Component,
  EagerChild2Component,
  EagerHomeComponent,
} from './features/eager-loading';

const routes: Routes = [
  { path: '', redirectTo: 'eager-loading', pathMatch: 'full' },
  {
    path: 'eager-loading',
    component: EagerHomeComponent,
    children: [
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: EagerChild1Component },
      { path: 'child2', component: EagerChild2Component },
      { path: '**', redirectTo: 'child1' },
    ],
  },
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./features/lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: 'pre-loading',
    loadChildren: () =>
      import('./features/pre-loading/pre-loading.module').then(
        (m) => m.PreLoadingModule
      ),
    data: { preload: true }, // Preload only this module
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
