import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {

  public posts:any=[];

  constructor(private _postsService:PostsService ) {

    this._postsService.getPosts().subscribe(

         (data:any)=>{
            this.posts=data;
         },
         (_err:any)=>{
            alert("Internal Error")
         }    

    )

   }

  ngOnInit(): void {
  }

}
