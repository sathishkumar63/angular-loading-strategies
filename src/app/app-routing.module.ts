import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
