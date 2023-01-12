import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
