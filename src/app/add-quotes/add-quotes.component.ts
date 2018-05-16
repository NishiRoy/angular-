import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';
import { FormsModule } from '@angular/forms';
import {Router } from '@angular/router';
import { ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.css']
})
export class AddQuotesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _authorService:AuthorService,private router:Router) { }

  id:any;
  author:any;
  posts:any;

  ngOnInit() {
    this.posts={
      id:this.id,
      votes:0,
      content:'',
    }

    this.id= this.route.snapshot.paramMap.get('id');

    console.log("Hey from Id",this.id);

    let author=this._authorService.getAuthor(this.id);

    author.subscribe(data=>{
      this.author=data['data'];
      console.log(data)
    });
  }


  onSubmit(event){

    event.preventDefault();

    this.posts.id=this.id;

    this.posts.votes=0;
    

    console.log("Your new post is",this.posts);

    let tempObservable=this._authorService.postquote(this.posts);

    tempObservable.subscribe(data=>{
      console.log(data);
    })
  }

}






