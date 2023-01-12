import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { loginService } from './login.service';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full',
  // },

  // { path: 'app', loadChildren: () => import('../app.module').then(m => m.AppModule) }
];

@NgModule({
  declarations: [
    LoginComponent,
    PostsComponent,
  ],
  imports: [
    // RouterModule.forChild(routes),
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  
  providers: [HttpClient,loginService],
})
export class LoginModule { }
