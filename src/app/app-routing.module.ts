import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './core/custom-preloading-strategy';

const routes: Routes = [
  { path: '', redirectTo: 'lazy-loading', pathMatch: 'full' },
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./features/lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      )
  },
  {
    path: 'pre-loading',
    loadChildren: () =>
      import('./features/pre-loading/pre-loading.module').then(
        (m) => m.PreLoadingModule
      ),
    data: { preload: true } // Preload only this module
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
