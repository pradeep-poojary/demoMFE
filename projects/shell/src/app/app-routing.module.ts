import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from 'projects/login/src/app/login/posts/posts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.LoginModule),
  },
    
  {
    path: 'register',
    loadChildren: () => import('registration/Module').then((m) => m.RegistrationModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
