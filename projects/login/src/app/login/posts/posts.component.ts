import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { IndexServices, loginService } from '../login.service';

export interface PostType {
  title: string;
  body: string;
  id?: string | number,
  user_id?: string | number
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  userData: any;
  userList: any;
    postList: any;
    isShowUser: boolean = true;
    showPost: boolean = true;
    isDisplay = "none";
    postFormData: any;
    commentsFormData: any;
    isPostForm: boolean = false;
    postData: any;
    commentList: any;
    viewComments: boolean = false;
    postTitle: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: loginService) {
    this.userData = JSON.parse(localStorage.getItem('userData')as any);
    console.log(this.userData,"userdata")
    this.loginService.getAllUsersPosts().subscribe((data)=>{
      console.log(data,"data")
      this.postList = data;
      
    })
}

ngOnInit(): void {
  this.postFormData = new FormGroup({
      title: new FormControl(['']),
      body: new FormControl( [''])
  });
  this.commentsFormData = new FormGroup({
      body: new FormControl([''])
  });
 
   this.getAllUsersPosts();
  
}

getAllUsersPosts(){
  const userList = this.loginService.getAllUsers()
  const postsData = this.loginService.getAllUsersPosts()

  combineLatest([userList,postsData]).subscribe(data => {
    console.log(data,"combined")
    this.userList = data && data[0] && data[0]; 
    this.postList =  data && data[1] && data[1]; 
  
  })
  
}

addPost() {
  this.isDisplay = "block";
  this.isPostForm = true;
  this.viewComments = false;
  this.postTitle = 'Add Post';
}

addComment(data: PostType) {
  this.viewComments = false;
  this.isDisplay = "block";
  this.isPostForm = false;
  this.postData = data;
  this.postTitle = 'Add Comment';
}

close() {
  this.isDisplay = "none";
}

onSubmit() {
  let request = {}
  if (this.isPostForm) {
    request = {
          url: `${IndexServices.CommonServices.UserUrl}/${this.userData?.id}/posts`,
          data: {
              "title": this.postFormData.value?.title,
              "body": this.postFormData.value?.body,
              "user_id": this.userData.id
          }
      }

  } else {
    request = {
          url: `${IndexServices.CommonServices.PostUrl}/${this.postData?.id}/comments`,
          data: {
              "name": this.userData?.name,
              "email": this.userData?.email,
              "post": this.postData?.id,
              "body": this.commentsFormData.value?.body,
          }
      }
  }
  this.loginService.postService(request).subscribe((res) => {
    console.log(res);
      if (res?.field) {
          alert(`${res?.field} ${res?.message}`)
      } else {
          alert('Added Successfully');

          this.getAllUsersPosts();
          this.close();
      }
  });
}

viewComment(data: PostType) {
  console.log(data,"view coments")
  let req = {
      url: `${IndexServices.CommonServices.PostUrl}/${data?.id}/comments`,
  }
  this.loginService.getAllCommentsPost(data.id).subscribe((res) => {
    console.log(res,"comments")
      this.commentList = res;
      this.viewComments = true;
      this.isDisplay = "block";
      this.postTitle = 'View Comments';
  });
}

deletePost(data: any) {
  let postConfirmDelete = window.confirm(`Please confirm`);
  if (postConfirmDelete) {
      let req = {
          url: `${IndexServices.CommonServices.PostUrl}/${data?.id}`,
      }
      this.loginService.deleteService(req).subscribe((res) => {
          this.getAllUsersPosts();
      });
  }
}

}
