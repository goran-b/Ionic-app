import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { LoggedinGuardService } from './auth/services/loggedin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'prefix' },
  { path: 'login', redirectTo: 'auth', pathMatch: 'prefix' },
  { path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[AuthGuardService], 
  },
  {
    path: 'malf',
    loadChildren: () => import('./malf/malf.module').then( m => m.MalfPageModule), canActivate:[AuthGuardService]
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule), canActivate:[AuthGuardService]
  },
  {
    path: 'quiz',
    loadChildren: () => import('./qiuz/qiuz.module').then( m => m.QiuzPageModule), canActivate:[AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule), canActivate:[LoggedinGuardService]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
