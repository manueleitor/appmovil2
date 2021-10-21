import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ejercitate',
    loadChildren: () => import('./ejercitate/ejercitate.module').then( m => m.EjercitatePageModule)
  },
  {
    path: 'alimentate',
    loadChildren: () => import('./alimentate/alimentate.module').then( m => m.AlimentatePageModule)
  },
  {
    path: 'informate',
    loadChildren: () => import('./informate/informate.module').then( m => m.InformatePageModule)
  },
  {
    path: 'motivate',
    loadChildren: () => import('./motivate/motivate.module').then( m => m.MotivatePageModule)
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./rutinas/rutinas.module').then( m => m.RutinasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
