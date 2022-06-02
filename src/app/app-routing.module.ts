import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const ENABLE_TRACING = false;

const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    loadChildren: () => import('./pages/empty.page.module').then(m => m.EmptyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: ENABLE_TRACING, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
