import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';
import { FormsModule } from '@angular/forms';
import {Router } from '@angular/router';
import { ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _authorService:AuthorService,private router:Router) { }

  id:any;
  author:any;
  quotes:any;
  count:any;

  ngOnInit() {

  
    this.id= this.route.snapshot.paramMap.get('id');

    this.onload();

    
    }

    onload(){

    console.log("Whatever",this.id);

    let author=this._authorService.getAuthor(this.id);

    author.subscribe(data=>{
      this.author=data['data'];
      this.quotes=this.author[0]._quotes;
      console.log("POst",this.quotes);
      console.log("Hey Bhagwan",this.author[0]);
  
    });
    }
  

  voteUp(idi,vote){
    console.log("Vote Up");
    this.count =vote+1;

    console.log("votes",this.count)

    let voteObservable=this._authorService.editPost(this.count,idi);

    voteObservable.subscribe(data=>{
      console.log("Votes updated",data);
    })

    this.onload();
  }

  voteDown(idi,vote){

    this.count =vote-1;

    let voteObservable=this._authorService.editPost(this.count,idi);

    voteObservable.subscribe(data=>{
      console.log("Votes updated",data);
    })

    this.onload();

  }

  delete(idi){

    let del=this._authorService.destroy(idi);
    del.subscribe(data=>console.log("deleted stuff",data));

    this.onload();

  }
}
