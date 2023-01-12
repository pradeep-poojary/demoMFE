import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts/posts.component';




const routes: Routes = [
  {
    path:'',
    component: PostsComponent
  },
  // {
  //   path:'comments',
  //   component: CommentsComponent
  // },
  // {
  //   path:'posts',
  //   component: PostsComponent
  // },
  { path: 'post', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
