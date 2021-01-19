import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreLoadingComponent } from './components/pre-loading.component';

const routes: Routes = [{ path: '', component: PreLoadingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreLoadingRoutingModule {}
