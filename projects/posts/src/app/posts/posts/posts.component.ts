import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  allUserPosts:any;

  constructor(private postService: PostsService) {
   
  this.postService.getAllUsersPosts().subscribe((data)=>{
        this.allUserPosts = data;
    })
    
  }
  
}
